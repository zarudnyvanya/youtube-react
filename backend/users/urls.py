from django.urls import path
from django.urls import path, include, re_path
from . import views
from .views import *
from rest_framework import routers

urlpatterns = [
    path('api/v1/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken'))
]

