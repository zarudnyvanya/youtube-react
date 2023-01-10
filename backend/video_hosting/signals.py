import gc
import os
import random
import string
import subprocess
import threading
import time

from PIL import Image
from config.services import crop_center_v2
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from django.db.models.signals import post_save
from django.dispatch import receiver
from moviepy.editor import VideoFileClip
from users.models import CustomUser

from .models import Video, Channel


def to_mp4(inputfile, bias):
    _format = '.' + inputfile.split('.')[-1]
    outputfile = ".".join(inputfile.replace(_format, ".mp4").split('.')[:-1]) + "_" + bias + ".mp4"
    pr = subprocess.Popen(['ffmpeg', '-i', inputfile, '-vcodec', 'libx264', '-acodec', 'aac',"-r", "30", "-vsync", "2", outputfile],
                          stdout=subprocess.PIPE)
    pr.stdout.read()

    gc.collect()
    return outputfile, pr


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
        self.instance = obj

        super(LikeThread, self).__init__(**kwargs)

    def to_mp4(self):
        return to_mp4(self.instance.file.path, bias=random_char(6))

    def run(self):
        _format = self.instance.file.path.split('.')[-1]
        output, pr = self.to_mp4()

        for_delete = self.instance.file.path

        self.instance.file.name = "\\".join(output.split("\\")[-6:])
        self.instance.save()

        print('new video')
        print('delete')
        while True:
            gc.collect()
            try:
                os.remove(for_delete)
                break
            except PermissionError as ex:
                print(ex)
                time.sleep(10)


# long running code here


@receiver(post_save, sender=Video)
def video_processing(sender, instance, created, **kwargs):
    if created:
        video = VideoFileClip(instance.file.path)
        instance.duration = video.duration
        instance.save()
        if not instance.image:
            temp = NamedTemporaryFile()
            video.save_frame(temp, 0)
            temp.flush()
            instance.image.save(instance.title + '.png', File(temp))
            temp.close()
            instance.save()
        if instance.image:
            image = Image.open(instance.image.path)
            if image.mode in ("RGBA", "P"):
                image = image.convert("RGB")
            image = crop_center_v2(image, (16, 9))
            image.save(instance.image.path)
        LikeThread(instance).start()
