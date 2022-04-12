from venv import create
from django.db import models

# Create your models here.
class User(models.Model):
    username = models.TextField(primary_key=True)    
    def __str__(self):
      return self.username

class Key(models.Model):
    username = models.TextField(primary_key=True) 
    keyword = models.TextField()   
    def __str__(self):
      return self.username


class UserData(models.Model):
    username = models.TextField()
    content = models.TextField()
    
    def __str__(self):
      return self.content


class Data(models.Model):
    username = models.TextField(primary_key=True)
    word1 = models.TextField()    
    word2 = models.TextField()    
    word3 = models.TextField()    
    word4 = models.TextField()   
    word5 = models.TextField()   

    def __str__(self):
      return self.username

class A(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class B(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class C(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class D(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class E(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class F(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class G(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class H(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class I(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class J(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class K(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class L(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class M(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class N(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class O(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class P(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class Q(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class R(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class S(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class T(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class U(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class V(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class W(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class X(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class Y(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class Z(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
  
  