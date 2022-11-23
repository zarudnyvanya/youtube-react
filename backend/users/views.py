from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from .models import CustomUser
from .permissions import IsOwner
from .serializers import UserSerializer


class UserViewSet(mixins.CreateModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  GenericViewSet):
    serializer_class = UserSerializer
    queryset = CustomUser.objects.all().select_related('profile')
    permission_classes = (IsOwner,)
