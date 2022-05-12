
from pipes import Template
from django.http import response
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework.serializers import Serializer
from .models import A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, UserHistory
from .models import UserData
from .models import User
from .models import Key
from .serializers import UserNoteSerializer
from .serializers import LetterSerializer
from .serializers import UserDataSerializer
from .serializers import HistorySerializer
from api import serializers
import random
# from api import serializers
# from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
# Create your views here.



# Recieve the file content and save on database
@api_view(['POST', 'GET'])
def  createProduct(request):
    if request.POST.get('action') == 'create-post':
        name= request.POST.get('name')
        temp = request.POST.get('content')
        content =temp.split()
        # serializer = UserDataSerializer()
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
                        # serializer = UserDataSerializer(obj)
                    else:
                        print(titi)          
            else:
                print("The word " + str(titi) +" is already in list")
            
            first_letter = titi[0].upper()
            temp_letter = list(eval(first_letter).objects.values('word'))
            exx = [d['word'] for d in temp_letter]
            if titi not in exx:
                if (len(titi) == 5) and (titi.isalpha()):
                    objj = eval(first_letter).objects.create(
                    word = titi )
                else:
                    print("The word " + titi + " does not meet the requirement")
            else: 
                None         
            print("* "*15)
        return Response("Okay")
    else:
        return Response("Cannot upload the file")
    return Response(None)

# Create an account on the database for new users
@api_view(['POST'])
def  createUser(request):
    if request.POST.get('action') == 'add-admin':
        email = request.POST.get('email')
        serializer = UserNoteSerializer()
        list_user = list(User.objects.values('username'))
        temp_user = [d['username'] for d in list_user]
        if email not in temp_user:
            obj =User.objects.create(
            username = email,
            win = 0,
            loose = 0,
        )
            obj3 = Key.objects.create(
            username = email
        )
            obj4 = UserHistory.objects.create(
            username = email
        )
            serializer = UserNoteSerializer(obj)
        else:
            ccc = User.objects.get(username = email)
            serializer = UserNoteSerializer(ccc)

        return Response(serializer.data)
      
    return Response(None)

#Send random word to front end either "ownword" from user or "default"
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
        # serializer = LetterSerializer()
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
    return Response("ERROR")

#Clear data when user win the game, which are color of keybord and list
@api_view(['POST'])
def  clear(request):
    if request.POST.get('action') == 'clear':
        email = request.POST.get('email')
        try:
            obj2 = UserHistory.objects.get(username = email)
            obj2.keyboard = ""
            obj2.save(update_fields=["keyboard"])     
            obj2.wordlist= ""
            obj2.save(update_fields=["wordlist"]) 
        except:
            obj = None  
    return Response("The data was deleted")

# Save the keyword when users play the game 
@api_view(['POST'])
def getKey(request):
    if request.POST.get('action') == 'keywords':
        email = request.POST.get('email')
        valuee = request.POST.get('valuee')
        obj = Key.objects.get(username = email)
        obj.keyword = valuee
        obj.save(update_fields=["keyword"]) 
        return Response(None)

# Send the keyword when user resume the game 
@api_view(['POST'])
def sendKey(request):
    if request.POST.get('action') == 'sendkey':
        email = request.POST.get('email')
        obj = Key.objects.get(username = email)
        value = obj.keyword 
        print(value)
        return Response(value)

# Save the color of keyboard when user play the game
@api_view(['POST'])
def getHistory(request):
    if request.POST.get('action') == 'gethistory':
        email = request.POST.get('email')
        valuee = request.POST.get('value')
        obj = UserHistory.objects.get(username = email)
        obj.keyboard = valuee
        obj.save(update_fields=["keyboard"]) 
        return Response(None)
    if request.POST.get('action') == 'getwordlist':
        email = request.POST.get('email')
        valuee = request.POST.get('value')
        obj = UserHistory.objects.get(username = email)
        obj.wordlist = valuee
        obj.save(update_fields=["wordlist"]) 
        return Response(valuee)

# Tracking the color of keyboard and Word List
@api_view(['POST'])
def sendHistory(request):
    if request.POST.get('action') == 'sendhistory':
        email = request.POST.get('email')
        obj = UserHistory.objects.get(username = email)
        cc =  HistorySerializer(obj)
        return Response(cc.data)

#Clear the list of words when user request
@api_view(['POST'])
def clearData(request):
    if request.POST.get('action') == 'clearAllData':
        email = request.POST.get('email')
        obj= UserData.objects.filter(username = email)
        obj.delete()
        return Response("Delete data from user: " + email + " successfully")
@api_view(['POST'])
def getWin(request):
    if request.POST.get('action') == 'win':
        email = request.POST.get('email')
        obj = User.objects.get(username = email)
        value = obj.win
        return Response(value)

@api_view(['POST'])
def getLoose(request):
    if request.POST.get('action') == 'loose':
        email = request.POST.get('email')
        obj = User.objects.get(username = email)
        value = obj.loose
        return Response(value)

# Increase 1 every time user win the game
@api_view(['POST'])
def updateWin(request):
    if request.POST.get('action') == 'updatewin':
        email = request.POST.get('email')
        win = request.POST.get('win')
        obj = User.objects.get(username = email)
        obj.win = win
        obj.save(update_fields=["win"]) 
        return Response(None)

# Increase 1 every time user loose the game
@api_view(['POST'])
def updateLoose(request):
    if request.POST.get('action') == 'updateloose':
        email = request.POST.get('email')
        loose = request.POST.get('loose')
        obj = User.objects.get(username = email)
        obj.loose = loose
        obj.save(update_fields=["loose"]) 
        value = obj.loose
        return Response(None)

# Send the time that users win or loose the game to front end
@api_view(['POST'])
def getCount(request):
    if request.POST.get('action') == 'count-time':
        email = request.POST.get('email')
        obj = User.objects.get(username = email)
        cc =  UserNoteSerializer(obj)
        return Response(cc.data)