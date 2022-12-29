from django.db.models import Q
from django.http import StreamingHttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.exceptions import PermissionDenied
from rest_framework.viewsets import GenericViewSet

from .serializers import *
from .services import open_file, optimize_video_query, optimize_channel_query
from rest_framework import viewsets, mixins, status

from users.permissions import IsAuthenticatedOrOwnerOrReadOnly, IsAdminOrReadOnly
from .permissions import *
from mailing.models import ChannelMailingList

User = get_user_model()


def add_view_video(request, pk: int):
    video = get_object_or_404(Video, pk=pk)
    video.views.remove(request.user.id)
    video.views.add(request.user)


def get_streaming_video(request, pk: int):
    file, status_code, content_length, content_range = open_file(request, pk)
    response = StreamingHttpResponse(file, status=status_code, content_type='video/mp4')
    if not content_range:
        add_view_video(request, pk)
    response['Accept-Ranges'] = 'bytes'
    response['Content-Length'] = str(content_length)
    response['Cache-Control'] = 'no-cache'
    response['Content-Range'] = content_range
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
    return response


##############
class VideoViewSet(viewsets.ModelViewSet):
    queryset = optimize_video_query(Video.objects.all())
    serializer_class = VideoSerializer
    permission_classes = (IsAuthenticatedOrOwnerOrReadOnly,)
    http_method_names = ('get', 'head', 'options', 'post', "patch", 'delete')

    def get_serializer_class(self):
        serializer_class = self.serializer_class
        if self.request.method in ('PUT', 'PATCH'):
            serializer_class = VideoUpdateSerializer
        return serializer_class

    def get_permissions(self):
        if self.action in ['last_views', 'new', 'like']:
            return (permissions.IsAuthenticated(),)
        return (IsAuthenticatedOrOwnerOrReadOnly(),)

    def get_instance(self, pk=None):
        return get_object_or_404(Video, pk=pk)

    @action(detail=True, methods=['get'])
    def category(self, request, pk=None):
        video = optimize_video_query(Video.objects.filter(category__in=[pk]))
        serializer = VideoSerializer(video, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def channel(self, request, pk=None):
        video = optimize_video_query(Video.objects.filter(channel=pk))
        serializer = VideoSerializer(video, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def last_views(self, request):
        video = optimize_video_query(Video.objects.filter(views=request.user).order_by('-view_video__time'))
        serializer = VideoSerializer(video, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def new(self, request):
        video = optimize_video_query(Video.objects.filter(~Q(views=request.user)))
        serializer = VideoSerializer(video, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get', 'post', 'delete'])
    def like(self, request, pk=None):
        self.get_object = self.get_instance(pk)
        like = Likes.objects.filter(video=pk, user=request.user).exists()
        subscribe = Subscribers.objects.filter(user=request.user, channel=self.get_object.channel).exists()
        mail = ChannelMailingList.objects.filter(user=request.user, channel=self.get_object.channel).exists()
        if request.method == "GET":
            return Response({'like': like,
                             'subscribe': subscribe,
                             'mail': mail})
        elif request.method == "POST":
            if not like:
                self.get_object.likes.add(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif request.method == "DELETE":
            if like:
                self.get_object.likes.remove(request.user)
            return Response(status=status.HTTP_204_NO_CONTENT)


class ChannelViewSet(mixins.CreateModelMixin,
                     mixins.RetrieveModelMixin,
                     mixins.UpdateModelMixin,
                     mixins.ListModelMixin,
                     GenericViewSet):
    serializer_class = ChannelSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        if self.action == 'create':
            raise PermissionDenied()
        if self.action == 'list':
            return optimize_channel_query(Channel.objects.all())
        else:
            return optimize_channel_query(Channel.objects.all())

    def get_serializer_class(self):
        if self.action == 'subscribe':
            return SubscribeSerializer
        else:
            return ChannelSerializer

    def get_permissions(self):
        if self.action in ["follow", 'subscribe', 'me']:
            return (permissions.IsAuthenticated(),)
        else:
            return (IsOwnerOrReadOnly(),)

    def get_instance(self):
        return optimize_channel_query(Channel.objects.filter(user=self.request.user))[0]

    @action(detail=False, methods=['get', 'put', 'patch'])
    def me(self, request, *args, **kwargs):
        self.get_object = self.get_instance
        if request.method == "GET":
            return self.retrieve(request, *args, **kwargs)
        elif request.method == "PUT":
            return self.update(request, *args, **kwargs)
        elif request.method == "PATCH":
            return self.partial_update(request, *args, **kwargs)

    # @action(detail=False, methods=['get'])
    # def subscribers(self, request, *args, **kwargs):
    #     channels = optimize_channel_query(
    #         Channel.objects.filter(user__in=self.get_instance().subscribers.all()).order_by('subscribers'))
    #     print(channels)
    #     serializer = self.serializer_class(channels, many=True)
    #     return Response(serializer.data)

    @action(detail=True, methods=['get', 'post', 'delete'])
    def subscribe(self, request, pk):
        channel = get_object_or_404(Channel, pk=pk)
        subscribe = Subscribers.objects.filter(user=request.user, channel=channel).exists()
        if request.method == 'POST':
            if not subscribe:
                Subscribers.objects.create(user=request.user, channel=channel)
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif request.method == "DELETE":
            if subscribe:
                instance = get_object_or_404(Subscribers, user=request.user, channel=channel)
                instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif request.method == "GET":
            return Response({"subscribe": subscribe})

    @action(detail=False, methods=['get'])
    def follow(self, request):
        channels = optimize_channel_query(Channel.objects.filter(subscribers=request.user))
        serializer = ChannelSerializer(channels, many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminOrReadOnly,)


class SubscriberViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin,
                        GenericViewSet):
    serializer_class = ChannelSerializer

    def get_queryset(self):
        return Channel.objects.filter(subsribers=self.request.user)
