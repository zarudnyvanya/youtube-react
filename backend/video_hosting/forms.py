from django import forms

from .models import Video


class ResumeForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = ['title', 'description', 'image', 'file']
