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

class NameListAPI(APIView):
    def get(self, request):
        #Json 파일로 받아야 하지만 테스트를 위해 현재 한글이름 string값 받아서 처리하도록 함
        #data = JSONParser().parse(request)
        kor_name = request.GET.get('KorName', None)
        arr = Recommend(kor_name)
        print(arr)
        
        #배열을 Json파일로 변환 후 넘겨줘야 함
        #serializer = RecSerializer(data=data)

        return Response()

