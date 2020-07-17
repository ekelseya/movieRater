"""
Registers app models to the default admin interface
"""
from django.contrib import admin
from .models import Movie, Rating, Comment

# Register your models here.
admin.site.register(Movie)
admin.site.register(Rating)
admin.site.register(Comment)
