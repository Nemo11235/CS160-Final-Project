from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Key, UserHistory
from .models import User
from .models import UserData
from .models import A

class KeySerializer(ModelSerializer):
    class Meta:
        model  = Key
        fields = '__all__'

class UserNoteSerializer(ModelSerializer):
    class Meta:
        model  = User
        fields = '__all__'

class UserDataSerializer(ModelSerializer):
    class Meta:
        model  = UserData
        fields = '__all__'

class LetterSerializer(ModelSerializer):
    class Meta:
        model  = A
        fields = '__all__'

class HistorySerializer(ModelSerializer):
    class Meta:
        model  = UserHistory
        fields = '__all__'