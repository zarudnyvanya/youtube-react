from django.shortcuts import render
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework.response import Response

from mailing.services import sendMail
from django.http import HttpResponse
from rest_framework import status

# Create your views here.
@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def send_mail_view(request):
	sendMail()
	return HttpResponse({'success':True})