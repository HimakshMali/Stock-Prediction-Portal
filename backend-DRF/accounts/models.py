from django.db import models

# Create your models here.



class LeadsModel(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    phone_number=models.CharField(max_length=100)
    # password=models.CharField(max_length=100)

    def __str__(self):
        return self.email
    