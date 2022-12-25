from django.urls import path

from mailing.views import send_mail_view

urlpatterns = [
    path('send_mail/',  send_mail_view),

]
