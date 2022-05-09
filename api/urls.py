from django.urls import path
from . import views

urlpatterns = [

    path('product/create/', views.createProduct, name = 'create-product' ),
    path('user/create/', views.createUser, name = 'create-user' ),
    path('user/getword/', views.getWord, name = 'get-word' ),
    path('user/clear/', views.clear, name = 'clear' ),
    path('user/getkey/', views.getKey, name = 'getkey' ),
    path('user/sendkey/', views.sendKey, name = 'sendkey' ), 
    path('user/gethistory/', views.getHistory, name = 'gethistory' ), 
    path('user/sendhistory/', views.sendHistory, name = 'sendhistory' ), 
    path('user/cleardata/', views.clearData, name = 'cleardata' ),
    path('user/getwin/', views.getWin, name = 'getwin' ),
    path('user/getloose/', views.getLoose, name = 'getloose' ),
    path('user/updatewin/', views.updateWin, name = 'updatewin' ),
    path('user/updateloose/', views.updateLoose, name = 'updateloose' ),
    path('user/count/', views.getCount, name = 'count' ),





]
