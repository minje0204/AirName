import json

from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .labeling import GetRandomName
class Labeling(APIView):
    def get(self, request):
        result = GetRandomName()

        data = json.dumps(result)

        return JsonResponse(data, safe=False)


