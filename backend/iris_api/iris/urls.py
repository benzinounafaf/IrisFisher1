from django.conf.urls import include, url
from django.views.generic import TemplateView
from . import views


urlpatterns=[
	url(r'^import_data/$', views.import_data, name='import_data'),
    url(r'all/', views.All.as_view()),
    url(r'^all_classe/', views.all_classe.as_view()),
    url('^classe/(?P<name>.+)/$', views.get_classe.as_view()),
 
]