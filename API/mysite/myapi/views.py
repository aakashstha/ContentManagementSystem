from rest_framework import viewsets

from .serializers import EventsSerializer
from .serializers import CoursesSerializer
from .serializers import GallerySerializer
from .models import Courses
from .models import Events
from .models import Gallery

class CoursesViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all().order_by('Coursename')
    serializer_class = CoursesSerializer


class EventsViewSet(viewsets.ModelViewSet):
    queryset = Events.objects.all().order_by('Eventname')
    serializer_class = EventsSerializer


class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all().order_by('Imagepath')
    serializer_class = GallerySerializer
