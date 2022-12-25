from django.db import models
from django.contrib.auth import get_user_model

from video_hosting.models import Channel

# Create your models here.
User = get_user_model()


class ChannelMailingList(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id')
	channel = models.ForeignKey(Channel, on_delete=models.CASCADE, related_name='channel')

