from http.client import HTTPResponse
import json

from django.shortcuts import render
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .labeling import *

class Labeling(APIView):
    def get(self, request):
        result = GetRandomName()
        data = json.dumps(result)

        return JsonResponse(data, safe=False)

    def put(self, request):
        SetNameAttribute(request.data['name'], request.data['gender'], request.data['attribute'])
        return JsonResponse("true", safe=False)

