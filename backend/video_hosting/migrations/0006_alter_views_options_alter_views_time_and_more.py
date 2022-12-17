# Generated by Django 4.1.2 on 2022-12-14 00:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('video_hosting', '0005_video_views_alter_views_user_alter_views_video'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='views',
            options={'ordering': ('-time',)},
        ),
        migrations.AlterField(
            model_name='views',
            name='time',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='views',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='view_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='views',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='view_video', to='video_hosting.video'),
        ),
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('channel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_channel', to='video_hosting.channel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='channel',
            name='subscribes',
            field=models.ManyToManyField(related_name='subs', through='video_hosting.Subscribers', to=settings.AUTH_USER_MODEL),
        ),
    ]