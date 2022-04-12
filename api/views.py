
from pipes import Template
from django.http import response
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
from .models import A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z
from .models import UserData
from .models import User
from .models import Data
from .models import Key
from .serializers import UserNoteSerializer
from .serializers import LetterSerializer
from .serializers import UserDataSerializer
from api import serializers
import random
# from api import serializers
# from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
# Create your views here.




@api_view(['POST', 'GET'])
def  createProduct(request):
    if request.POST.get('action') == 'create-post':
        name= request.POST.get('name')
        temp = request.POST.get('content')
        content =temp.split()
        serializer = UserDataSerializer()
        test = list(UserData.objects.filter(username=name).values('content'))
        ex = [d['content'] for d in test]
        check = []
        for i in range(len(content)):
            titi= content[i]
            if titi not in ex:
                if titi not in check:        
                    if (len(titi) == 5) and (titi.isalpha()):
                        check.append(titi)
                        obj =UserData.objects.create(
                        username =name,
                        content = titi )
                        serializer = UserDataSerializer(obj)
                    else:
                        print(titi)          
            else:
                print("The word " + str(titi) +" is already in list")
            
            first_letter = titi[0].upper()
            temp_letter = list(eval(first_letter).objects.values('word'))
            exx = [d['word'] for d in temp_letter]
            print(exx)
            print("* "*30)
            if titi not in exx:
                if (len(titi) == 5) and (titi.isalpha()):
                    objj = eval(first_letter).objects.create(
                    word = titi )
                    print("Everything will be ok nhe")
                else:
                    print("NOT NOT NOT GOOD")
            else: 
                None         
            print("* "*15)
        return Response(None)
    else:
        return Response("Cannot upload the file")
    return Response(None)

@api_view(['POST'])
def  createUser(request):
    if request.POST.get('action') == 'add-admin':
        print("* "*30)
        email = request.POST.get('email')
        print(email)
        serializer = UserNoteSerializer()
        list_user = list(User.objects.values('username'))
        temp_user = [d['username'] for d in list_user]
        if email not in temp_user:
            obj =User.objects.create(
            username = email
        )
            obj2 = Data.objects.create(
            username = email
        )
            obj3 = Key.objects.create(
            username = email
        )
            serializer = UserNoteSerializer(obj)

        else:
            ccc = User.objects.get(username = email)
            serializer = UserNoteSerializer(ccc)

        return Response(serializer.data)
      
    return Response('FC AN XUAN')

@api_view(['POST'])
def  getWord(request):
    if request.POST.get('action') == 'ownword':
        email = request.POST.get('email')
        word1 = list(UserData.objects.filter(username=email).values('content'))
        whole_word= [d['content'] for d in word1]
        if (len(whole_word) ==0):
            return Response ("Please upload your own words")
        else:
            rand = random.choice(whole_word)
            return Response(rand.upper())
    if request.POST.get('action') =='default':
        email = request.POST.get('email')
        serializer = LetterSerializer()
        done = False
        while (done==False):
            letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            letter_rand = random.choice(letter)
            random_list = list(eval(letter_rand ).objects.values('word'))
            temp_list = [d['word'] for d in random_list]
            if (len(temp_list) != 0):
                done == True
                word_choice = random.choice(temp_list)
                return Response(word_choice.upper())
                break
        return Response("OK OK")
    return Response("Tao Bi Loi lam roi")


@api_view(['POST'])
def  getData(request):
    if request.POST.get('action') == 'word1':
        
        email = request.POST.get('email')
        value = request.POST.get('value')
        try:   
            obj = Data.objects.get(username = email)
        except:
            obj = None
            return Response("KHOIA")
        obj.word1 = value
        obj.save()

    if request.POST.get('action') == 'word2':
        email = request.POST.get('email')
        value = request.POST.get('value')
        print(email)
        print(value)
        try:
            obj = Data.objects.get(username = email)
            
        except:
            obj = None
        if obj is None:
            return Response(None)
        obj.word2 = value
        obj.save()

    if request.POST.get('action') == 'word3':
        email = request.POST.get('email')
        value = request.POST.get('value')
        try:
            obj = Data.objects.get(username = email)
        except:
            obj = None
        if obj is None:
            return Response(None)
        obj.word3 = value
        obj.save()
    if request.POST.get('action') == 'word4':
        email = request.POST.get('email')
        value = request.POST.get('value')
        try:
            obj = Data.objects.get(username = email)
   
        except:
            obj = None
        if obj is None:
            return Response(None)
        obj.word4 = value
        obj.save()
        
    if request.POST.get('action') == 'word5':
        email = request.POST.get('email')
        value = request.POST.get('value')
        try:
            obj = Data.objects.get(username = email)
            
        except:
            obj = None
        if obj is None:
            return Response(None)
        obj.word5 = value
        obj.save()
     

    return Response(None)

@api_view(['POST'])
def  getTracking(request):
    if request.POST.get('action') == 'tracking':
        email = request.POST.get('email')
    try:
        obj = Data.objects.get(username = email)
    except:
        obj = None  
    if obj is None:
        return Response(None)
    array =[]
    if obj.word5 !='':
        array.append(obj.word1)
        array.append(obj.word2)
        array.append(obj.word3)
        array.append(obj.word4)
        array.append(obj.word5)
    elif(obj.word4 !=''):
        array.append(obj.word1)
        array.append(obj.word2)
        array.append(obj.word3)
        array.append(obj.word4)
    elif(obj.word3 !=''):
        array.append(obj.word1)
        array.append(obj.word2)
        array.append(obj.word3)
    elif(obj.word2 !=''):
        array.append(obj.word1)
        array.append(obj.word2)
    elif(obj.word1 !=''):
        array.append(obj.word1)

    return Response(array)


@api_view(['POST'])
def  clear(request):
    if request.POST.get('action') == 'clear':
        email = request.POST.get('email')
    try:
        obj = Data.objects.get(username = email)
        obj.word1 = ""
        obj.word2= ""
        obj.word3= ""
        obj.word4= ""
        obj.word5= ""
        obj.save()
  
    except:
        obj = None  
    return Response("The data was deleted")

@api_view(['POST'])
def getKey(request):
    if request.POST.get('action') == 'keywords':
        email = request.POST.get('email')
        valuee = request.POST.get('valuee')
        obj = Key.objects.get(username = email)
        obj.keyword = valuee
        obj.save()
        return Response(None)
@api_view(['POST'])
def sendKey(request):
    if request.POST.get('action') == 'sendkey':
        email = request.POST.get('email')
        obj = Key.objects.get(username = email)
        value = obj.keyword 
        print(value)
        return Response(value)