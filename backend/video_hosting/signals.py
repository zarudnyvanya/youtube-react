import gc
import os
import random
import string
import subprocess
import threading
import time

from django.core.files import File
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import CustomUser

from .models import Video, Channel


def to_mp4(inputfile, bias):
    _format = '.' + inputfile.split('.')[-1]
    outputfile = ".".join(inputfile.replace(_format, ".mp4").split('.')[:-1]) + "_" + bias + ".mp4"
    proc = subprocess.Popen(['ffmpeg', '-i', inputfile, '-vcodec', 'h264', "-r", "30", outputfile], stdout=subprocess.PIPE)
    #subprocess.check_output("Taskkill /PID %d /F" % proc.pid)
    proc.stdout.read()

    #del proc
    gc.collect()
    #os.kill(proc.pid, signal.SIGILL)
    # '-acodec', 'mp2',
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


class LikeThread(threading.Thread):
    def __init__(self, obj, **kwargs):
        self.instance  = obj

        super(LikeThread, self).__init__(**kwargs)

    def to_mp4(self):
        return to_mp4(self.instance.file.path, bias=random_char(6))


    def run(self):
        _format = self.instance.file.path.split('.')[-1]
        output = self.to_mp4()
        while True:
            gc.collect()
            try:
                os.remove(self.instance.file.path)
                break
            except PermissionError as ex:
                print(ex)
                time.sleep(10)
        with open(output, 'rb') as fi:
            self.instance.file = File(fi, name=os.path.basename(fi.name))
            self.instance.save()
        while True:
            gc.collect()
            try:
                os.remove(output)
                break
            except PermissionError as ex:
                print(ex)
                time.sleep(10)




# long running code here


@receiver(post_save, sender=Video)
def video_processing(sender, instance, created, **kwargs):
    if created:
        pass
        LikeThread(instance).start()
