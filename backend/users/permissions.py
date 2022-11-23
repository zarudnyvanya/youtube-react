from django.contrib.auth.models import AnonymousUser
from rest_framework import permissions



class IsNotBlockOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.method in permissions.SAFE_METHODS or
            request.user and
            request.user.is_authenticated and
            not request.user.is_block
        )

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return bool(request.user and request.user.is_staff)


class IsOwnerOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.channel == request.user.channel


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user

class IsAuthenticatedOrOwnerOrReadOnly(IsNotBlockOrReadOnly, IsOwnerOrReadOnly, permissions.BasePermission):
    pass


class IsOnlyAnonymousRegistration(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == "POST":
            return request.user == AnonymousUser

        return False