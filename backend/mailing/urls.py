from django.urls import path, include
from rest_framework import routers

from mailing.views import MailViewSet
router = routers.DefaultRouter()
router.register(r'channel', MailViewSet, basename="mail")
urlpatterns = [
    path('api/v1/', include(router.urls)),

]
