from django.contrib import admin
from .models import Courses
from .models import Events
from .models import Gallery


admin.site.register(Courses)
admin.site.register(Events)
admin.site.register(Gallery)