from rest_framework import serializers

from .models import Courses
from .models import Events
from .models import Gallery


class CoursesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Courses
        fields = ('id', 'Coursename', 'Coursefullform', 'Availabilty')


class EventsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Events
        fields = ('id', 'Eventname', 'Eventdescription', 'Date')


class GallerySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id', 'Imagepath')
