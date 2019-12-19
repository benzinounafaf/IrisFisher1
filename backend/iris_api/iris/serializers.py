from rest_framework import serializers
from .models import IrisManagement


class IrisManagementSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'sepal_length',
            'sepal_width',
            'petal_length',
            'petal_width',
            'classe',
        )
        model = IrisManagement