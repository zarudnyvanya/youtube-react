from django.contrib import admin
from .models import CustomUser

class AdminUser(admin.ModelAdmin):
    list_display = ('id','email', 'last_name', 'first_name', 'is_staff', 'is_active', 'is_block')
# Register your models here.
admin.site.register(CustomUser, AdminUser)
