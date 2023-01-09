from django.contrib import admin
from .models import Video, Channel, Category, Subscribers, Views, Likes


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description')


class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at', 'channel', 'get_count_views')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)


class ChannelAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'name', 'is_active')
    list_display_links = ('pk', 'name')
    list_editable = ('is_active',)
    list_filter = ('is_active',)

class ViewsAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'video')

# Re
admin.site.register(Video, VideoAdmin)
admin.site.register(Channel, ChannelAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Views, ViewsAdmin)
admin.site.register(Likes)
admin.site.register(Subscribers)
