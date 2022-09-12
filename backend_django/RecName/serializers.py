from rest_framework import serializers
from .models import NameData


class RecSerializer(serializers.ModelSerializer):
    class Meta:
        model = NameData  # product 모델 사용
        fields = '__all__'  # 모든 필드 포함
