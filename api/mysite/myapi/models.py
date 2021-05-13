from django.db import models


class Courses(models.Model):

    Coursename = models.CharField(max_length=60)
    Coursefullform = models.CharField(max_length=60)
    Availabilty = models.BooleanField(default=False)

    def __str__(self):
        return self.Coursename


class Events(models.Model):

    Eventname = models.CharField(max_length=60)
    Eventdescription = models.CharField(max_length=500)
    Date = models.DateField()

    def __str__(self):
        return self.Eventname


class Gallery(models.Model):

    Imagepath = models.CharField(max_length=500)
    
    def __str__(self):
        return self.Imagepath
        
