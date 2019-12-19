from django.shortcuts import render 
from django.views import generic 
import pandas as pd
from django.http import HttpResponse
from .models import IrisManagement
from rest_framework import generics
from .serializers import IrisManagementSerializer
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response



def import_data(request):
	df = pd.read_csv('/Users/afafbenzinoun/IrisFisher1/backend/iris_api/iris/iriss.csv', sep=',', engine='python')
	attributes = ["sepal_length", "sepal_width", "petal_length", "petal_width", "classe"]
	df.columns = attributes
 
	for index, row in df.iterrows():
		_, created = IrisManagement.objects.get_or_create(
                sepal_length=row[0],
                sepal_width=row[1],
                petal_length=row[2],
                petal_width=row[3],
                classe=row[4],
                )

	response = "Import done!"
	return HttpResponse(response )



class All(generics.ListCreateAPIView):
    queryset = IrisManagement.objects.all()
    serializer_class = IrisManagementSerializer


class all_classe(generics.ListCreateAPIView):
    queryset = IrisManagement.objects.all()
    serializer_class = IrisManagementSerializer

    def list(self, request):
         return Response(set(self.get_queryset().values_list("classe", flat=True)))

class get_classe(generics.ListCreateAPIView):
     # queryset = IrisManagement.objects.all()
     serializer_class = IrisManagementSerializer

     def get_queryset(self):
        name = self.kwargs['name']
        return IrisManagement.objects.filter(classe=name)
