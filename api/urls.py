from django.urls import path
from . import views

urlpatterns = [

    path('product/create/', views.createProduct, name = 'create-product' ),
    path('user/create/', views.createUser, name = 'create-user' ),
    path('user/getword/', views.getWord, name = 'get-word' ),
    path('user/getdata/', views.getData, name = 'get-data' ),
    path('user/tracking/', views.getTracking, name = 'get-tracking' ),
    path('user/clear/', views.clear, name = 'clear' ),
    path('user/getkey/', views.getKey, name = 'getkey' ),
    path('user/sendkey/', views.sendKey, name = 'sendkey' ), 
]
