from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    adresse = forms.CharField(label='Adress', required=True)
    phone = forms.CharField(label='Phone', required=True)
    class Meta:
        model = CustomUser
        fields = ('first_name', 'last_name', 'username', 'email' )

class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = UserChangeForm.Meta.fields