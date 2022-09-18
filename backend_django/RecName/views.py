import json

from django.shortcuts import render
from rest_framework.response import Response
from .models import NameData
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .serializers import RecSerializer
from .rec import *

# class NameListAPI(APIView):
#     def get(self, request):
#         queryset = NameData.objects.all()
#         print(queryset)
#
#         KorName = request.GET.get('KorName', None)
#
#         serializer = RecSerializer(queryset, many=True)
#         return Response(serializer.data)

class NameList(APIView):
    def get(self, request):
        #Json 파일로 받아야 하지만 테스트를 위해 현재 한글이름 string값 받아서 처리하도록 함
        arr = Recommend(request.data['name'], request.data['gender'], request.data['age'])

        data = json.dumps(arr)

        return JsonResponse(data, safe=False)

