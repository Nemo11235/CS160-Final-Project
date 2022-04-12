from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Key
from .models import User
from .models import UserData
from .models import A
from .models import Data


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
class DataSerializer(ModelSerializer):
    class Meta:
        model  = Data
        fields = '__all__'