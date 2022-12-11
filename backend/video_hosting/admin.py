from django.contrib import admin
from .models import Video, Channel, Category

class AdminCategory(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')
# Re
admin.site.register(Video)
admin.site.register(Channel)
admin.site.register(Category, AdminCategory)