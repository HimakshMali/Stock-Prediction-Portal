from rest_framework import permissions
from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import LeadsModel
from .serializers import LeadsSerializer
# Create your views here.


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        response ={
            'status' :  'request was permitted'
        }

        return Response(response)

class LeadsView(generics.ListCreateAPIView):
    queryset = LeadsModel.objects.all()
    serializer_class = LeadsSerializer
    permission_classes = [IsAuthenticated]

class LeadDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = LeadsModel.objects.all()
    serializer_class = LeadsSerializer
    # permission_classes = [AllowAny]
