from django.conf.urls import  include, url
from django.views.generic import TemplateView
from django.contrib.auth.views import login, logout
from . import views


urlpatterns=[
	url(r'^signup/$', views.SignUp.as_view(), name='signup'),
    url(r'^login/$', login, name='login'),
    url(r'^logout/$', logout, name='logout'),
]