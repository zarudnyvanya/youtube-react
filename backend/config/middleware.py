from django.http import HttpResponse
from rest_framework import status
from rest_framework.response import Response


class BadRequest:
    def __init__(self, get_response):
        self._get_response = get_response
    def __call__(self, request):
        response = self._get_response(request)
        response['Access-Control-Allow-Headers'] = "*"
        response['Access-Control-Allow-Methods'] = "*"
        response['Access-Control-Allow-Origin'] = "*"
        return response

    # def process_exception(self, request, exception):
    #     print(f'Exception:  {exception}')
    #     return HttpResponse(f"Бекенд не говно, идите нахуй. {exception}", status=status.HTTP_400_BAD_REQUEST)