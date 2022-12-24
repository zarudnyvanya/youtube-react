from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response


class BadRequest:
    def __init__(self, get_response):
        self._get_response = get_response
    def __call__(self, request):
        responce = self._get_response(request)
        return responce

    def process_exception(self, request, exception):
        print(f'Exception: {request.build_absolute_uri}     {exception}')
        return HttpResponse("Бекенд не говно, идите нахуй.", status=status.HTTP_400_BAD_REQUEST)