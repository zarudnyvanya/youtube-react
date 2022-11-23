from django.core.validators import FileExtensionValidator

from rest_framework import serializers
from rest_framework.response import Response

from users.models import CustomUser
from .models import Video, Channel

from django.contrib.auth import get_user_model
User = get_user_model()

class CurrentChannelDefault:
    requires_context = True

    def __call__(self, serializer_field):
        return serializer_field.context['request'].user.channel


class ChannelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Channel
        fields = "__all__"
        depth = 1




class VideoSerializer(serializers.ModelSerializer):
    file = serializers.FileField(
        validators=[FileExtensionValidator(allowed_extensions=['mp4', "mvk"])],
        write_only=True)
    channel = serializers.HiddenField(default=CurrentChannelDefault())
    owner = ChannelSerializer(many=False, source='channel', read_only=True)

    def validate(self, attrs):
        video = Video(**attrs)
        if video.channel.user.is_block:
            raise serializers.ValidationError("Вы заблокированы")
        if not video.channel.is_active:
            serializers.ValidationError("Канал неактивный, активируйте канал в настройках")
        return attrs
    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'image', 'file', 'created_at', 'channel', 'owner']




class VideoUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'image']
