import os
import random
import string
import subprocess

from django.core.files import File
from django.db.models.signals import post_save
from django.dispatch import receiver

from users.models import CustomUser
from .models import Video, Channel
import threading

def to_mp4(inputfile, bias):
    with open(inputfile, 'r') as f:
        _format = '.' + inputfile.split('.')[-1]
        outputfile = ".".join(inputfile.replace(_format, ".mp4").split('.')[:-1]) + "_" + bias + ".mp4"
        subprocess.call(['ffmpeg', '-i', inputfile, '-vcodec', 'h264',  outputfile])
        f.close()
        #'-acodec', 'mp2',
    return outputfile


def random_char(y):
    return ''.join(random.choice(string.ascii_letters) for x in range(y))


@receiver(post_save, sender=CustomUser)
def create_user_channel(sender, instance, created, **kwargs):
    if created:
        Channel.objects.create(user=instance)


@receiver(post_save, sender=CustomUser)
def save_user_channel(sender, instance, **kwargs):
    instance.channel.save()




# class LikeThread(threading.Thread):
#     def __init__(self, obj, **kwargs):
#         self.instance  = obj
#
#         super(LikeThread, self).__init__(**kwargs)
#
#     def run(self):
#         _format = self.instance.file.path.split('.')[-1]
#         if _format != 'mp4':
#             output = to_mp4(self.instance.file.path, bias=random_char(6))
#             status = True
#             while True:
#                 try:
#                     os.remove(self.instance.file.path)
#                 except PermissionError:
#                     pri
#
#             with open(output, 'rb') as fi:
#                 self.instance.file = File(fi, name=os.path.basename(fi.name))
#                 self.instance.save()
#             os.remove(output)
# long running code here


@receiver(post_save, sender=Video)
def video_processing(sender, instance, created, **kwargs):
    if created:
        _format = instance.file.path.split('.')[-1]
        if _format != 'mp4':
            output = to_mp4(instance.file.path, bias=random_char(6))
            os.remove(instance.file.path)

            with open(output, 'rb') as fi:
                instance.file = File(fi, name=os.path.basename(fi.name))
                instance.save()
            os.remove(output)

