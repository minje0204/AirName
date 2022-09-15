from django.contrib import admin
from django.urls import path
from RecName.views import NameListAPI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rec', NameListAPI.as_view())
]