from django.core.validators import FileExtensionValidator

from rest_framework import serializers
from rest_framework.response import Response

from users.models import CustomUser
from .models import *

from django.contrib.auth import get_user_model

User = get_user_model()


class CategoryVideoSerializer(serializers.PrimaryKeyRelatedField, serializers.ModelSerializer):
    class Meta:
        model = Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class CurrentChannelDefault:
    requires_context = True

    def __call__(self, serializer_field):
        return serializer_field.context['request'].user.channel


class ChannelSerializer(serializers.ModelSerializer):
    subscribers = serializers.IntegerField(source="get_count_subscribes", read_only=True)

    class Meta:
        model = Channel
        fields = ['pk','user', 'name', 'description', 'image', 'banner', 'logo', 'is_active', 'subscribers']


class VideoSerializer(serializers.ModelSerializer):
    file = serializers.FileField(
        validators=[FileExtensionValidator(allowed_extensions=['mp4', "mkv", "DVR"])])
    channel = serializers.HiddenField(default=CurrentChannelDefault())
    owner = ChannelSerializer(many=False, source='channel', read_only=True)
    category = CategoryVideoSerializer(required=False, many=True, queryset=Category.objects.all())
    views = serializers.IntegerField(source='get_count_views', read_only=True)
    likes = serializers.IntegerField(source='get_count_likes', read_only=True)

    def validate(self, attrs):
        category = attrs['category']
        if len(category) > 3:
            raise serializers.ValidationError("Можно добавить максимум 3 категории")
        del attrs['category']
        video = Video(**attrs)
        if video.channel.user.is_block:
            raise serializers.ValidationError("Вы заблокированы")
        if not video.channel.is_active:
            serializers.ValidationError("Канал неактивный, активируйте канал в настройках")
        attrs['category'] = category
        return attrs

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'image', 'file', 'created_at', 'channel', 'owner', 'category',
                  'views', 'likes']


class VideoUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'image']


class SubscribeSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=CurrentChannelDefault)
    class Meta:
        model = Subscribers
        fields = ['user', "channel"]
