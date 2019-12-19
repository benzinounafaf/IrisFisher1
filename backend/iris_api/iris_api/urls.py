from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^iris/', include('iris.urls', namespace='iris')),
    url(r'^users/', include('users.urls', namespace='users')),
]
