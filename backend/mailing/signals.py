import os
from email.mime.image import MIMEImage

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from social_core.utils import build_absolute_uri

from mailing.models import ChannelMailingList
from mailing.services import sendMail
from video_hosting.models import Video, Channel, Subscribers


@receiver(post_save, sender=Video)
def save_user_channel(sender, instance,created, **kwargs):
	if created:
		
		channel = instance.channel
		mylist = ChannelMailingList.objects.filter(channel=channel)
		email = [elem.user.email for elem in mylist]
		text_content = 'This is an important message.'
		html_content = f"<div>Канал {instance.channel.name} Выложил видео {instance.title} в {instance.created_at}</div> <a href='http://127.0.0.1:3000/video/{instance.pk}'>ссылка</a>"


		sendMail(text_content=text_content,
			 	html_content=html_content,
			 	to=email)

@receiver(post_delete, sender=Subscribers)
def delete_from_email(sender, instance, **kwargs):
	user = instance.user
	channel = instance.channel
	obj = ChannelMailingList.objects.filter(user=user, channel=channel).limit(1)
	if obj:
		obj[0].delete()