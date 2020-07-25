"""
Registers viewsets to the DefaultRouter, which includes a default API root view,
that returns a response containing hyperlinks to all the list views.
It also generates routes for optional .json style format suffixes.
https://www.django-rest-framework.org/api-guide/routers/
"""
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import MovieViewSet, RatingViewSet, UserViewSet

router = routers.DefaultRouter()
router.register('movies', MovieViewSet)
router.register('ratings', RatingViewSet)
router.register('users', UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
