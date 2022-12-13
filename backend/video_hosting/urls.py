from django.urls import path, include, re_path
from . import views
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'video', VideoViewSet)
router.register(r'channel', ChannelViewSet)
router.register(r'categssory', CategoryViewSet)

urlpatterns = [
    path('stream/<int:pk>/', views.get_streaming_video, name='stream'),
    path('api/v1/drf-auth/', include('rest_framework.urls')),
    path('api/v1/', include(router.urls)),
]

