# from pygments import style
from django.contrib.auth.models import User
from rest_framework import serializers
from .models import LeadsModel

class UserSerializer(serializers.ModelSerializer):
    # write_only=True ensures the password can be received during registration 
    # but will never be included in any API responses (GET requests).
    password = serializers.CharField(write_only=True,style = {'input_type': 'password'})

    class Meta:
        model = User
        # These fields will automatically undergo basic validation 
        # (e.g., checking for unique usernames, valid email formats).
        fields = ['username', 'email', 'password']
    
    def create(self, validated_data):
        """
        This method is called automatically when serializer.save() is invoked.
        'validated_data' is a clean dictionary of data that has already passed all validation checks.
        """
        
        # CORRECT: User.objects.create_user automatically hashes the password.
        # NEVER use User.objects.create(**validated_data) here, as it would save the password in plain text.
        #
        # The '**' operator is standard Python dictionary unpacking. 
        # It turns {'username': 'alex', 'email': 'alex@example.com'} 
        # into: username='alex', email='alex@example.com'
        user = User.objects.create_user(**validated_data)
        
        # ALTERNATIVE (Explicit Unpacking):
        # Use this approach ONLY if you need to manipulate or extract a specific field 
        # before saving (e.g., separating profile data or modifying a field).
        #
        # user = User.objects.create_user(
        #     username=validated_data['username'],
        #     email=validated_data['email'],
        #     password=validated_data['password']
        # )
        
        return user

class LeadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LeadsModel
        fields = '__all__'