import threading
import time

from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.template.loader import render_to_string

from mailing.models import ChannelMailingList
from mailing.services import sendMail
from video_hosting.models import Video, Subscribers

class LikeThread(threading.Thread):
    def __init__(self, obj, **kwargs):
        self.instance  = obj
        super(LikeThread, self).__init__(**kwargs)

    def run(self):
        while True:
            try:
                img = self.instance.image.url
                break
            except Exception as ex:
                time.sleep(5)
                print(ex)

        channel = self.instance.channel
        mylist = ChannelMailingList.objects.filter(channel=channel)
        emails = [elem.user.email for elem in mylist]
        text_content = 'This is an important message.'

        html_content = render_to_string('mail.html', {'instance': self.instance})


        for email in emails:
            sendMail(text_content=text_content,
                 html_content=html_content,
                 to=[email])


@receiver(post_save, sender=Video)
def send_mail(sender, instance, created, **kwargs):
    if created:
        LikeThread(instance).start()



@receiver(post_delete, sender=Subscribers)
def delete_from_email(sender, instance, **kwargs):
    user = instance.user
    channel = instance.channel
    obj = ChannelMailingList.objects.filter(user=user, channel=channel)[:1]
    if obj:
        obj[0].delete()
