from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass
    adress = models.CharField(verbose_name='Adresse', max_length=255, null=True, blank=True, default=None)
    phone = models.CharField(verbose_name='phone', max_length=255, null=True, blank=True, default=None)
