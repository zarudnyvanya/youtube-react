from django.apps import AppConfig


class VideoHostingConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'video_hosting'
    verbose_name = "Видео-хостинг"
    def ready(self):
        import video_hosting.signals
