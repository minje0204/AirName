#users/urls.py
from django.urls    import path
from .              import views

urlpatterns = [
    path('sound/',views.NameList.as_view()),
    path('check/<str:name>',views.CheckName.as_view())
]
