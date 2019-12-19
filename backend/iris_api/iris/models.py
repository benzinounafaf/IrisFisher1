from django.db import models

class IrisManagement(models.Model):
    sepal_length = models.CharField(max_length=255, null=True, blank=True, default=None)
    sepal_width = models.CharField(max_length=255, null=True, blank=True, default=None)
    petal_length = models.CharField(max_length=255, null=True, blank=True, default=None)
    petal_width = models.CharField(max_length=255, null=True, blank=True, default=None)
    classe = models.CharField(max_length=255, null=True, blank=True, default=None)
