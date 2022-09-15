from django.shortcuts import render
from rest_framework.response import Response
from .models import NameData
from rest_framework.views import APIView
from .serializers import RecSerializer
from .rec import *

class NameListAPI(APIView):
    def get(self, request):
        queryset = NameData.objects.all()
        print(queryset)

        KorName = request.GET.get('KorName', None)

        serializer = RecSerializer(queryset, many=True)
        return Response(serializer.data)
