# from django.urls import 
from django.urls import path 
from accounts import views as UserViews
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', UserViews.RegisterView.as_view(), name='register'),
    path("jwt/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("jwt/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    path('protected-view/', UserViews.ProtectedView.as_view()),
    path('leads/', UserViews.LeadsView.as_view(), name='leads'),
    path('leads/<int:pk>/', UserViews.LeadDetailView.as_view(), name='lead-detail'),
]