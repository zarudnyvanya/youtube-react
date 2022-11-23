from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class CustomUser(AbstractUser):
    username = models.CharField(max_length=20, unique=False, blank=True, null=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'

    GENDERS = (
    ('m', "Мужчина"),
    ('f', "Женщина"))


    gender = models.CharField(choices=GENDERS, max_length=1, default='')
    birth_date = models.DateField(default="2000-09-12")
    is_block = models.BooleanField(default=0)

    REQUIRED_FIELDS = ['username']

    def get_username(self):
        return self.username


