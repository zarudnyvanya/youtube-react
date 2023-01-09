import time

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from mailing.models import ChannelMailingList
from mailing.services import sendMail
from video_hosting.models import Video, Subscribers


@receiver(post_save, sender=Video)
def send_mail(sender, instance, created, **kwargs):
    if created:
        time.sleep(60)
        channel = instance.channel
        mylist = ChannelMailingList.objects.filter(channel=channel)
        email = [elem.user.email for elem in mylist]
        text_content = 'This is an important message.'

        html_content = \
            f"""<div>Канал {instance.channel.name} 
					Выложил видео {instance.title} 
					в {instance.created_at}</div> 
					<a href='http://139.59.147.181/videoPage/{instance.pk}'>LOSTI</a>
					<img src=http://139.59.147.181:8432{instance.image.url}>"""
        print(kwargs)
        print('send', email)
        sendMail(text_content=text_content,
                 html_content=html_content,
                 to=email)


@receiver(post_delete, sender=Subscribers)
def delete_from_email(sender, instance, **kwargs):
    user = instance.user
    channel = instance.channel
    obj = ChannelMailingList.objects.filter(user=user, channel=channel)[:1]
    if obj:
        obj[0].delete()
