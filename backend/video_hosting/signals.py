from django.db.models.signals import post_save
from django.dispatch import receiver

from mailing.models import ChannelMailingList
from mailing.services import sendMail
from video_hosting.models import Video, Channel



@receiver(post_save, sender=Video)
def save_user_channel(sender, instance, **kwargs):
	print("Видео создано. я из video")
	channel = instance.channel
	mylist = ChannelMailingList.objects.filter(channel=channel)
	email = [elem.user.email for elem in mylist]
	sendMail(to=email)