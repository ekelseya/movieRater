"""
Create viewsets for the app Models: User, Movie, and Rating

Classes:

    UserViewSet
    MovieViewSet
    RatingViewSet

Functions:

    see https://www.django-rest-framework.org/api-guide/viewsets/#viewsets
        for all inherited actions

    rate_movie(request, pk=None) -> creates or updates the movie rating in the MovieViewSet class
    update(request, *args, **kwargs) -> overrides update and returns 400 status
    create(request, *args, **kwargs) -> overrides create and returns 400 status

"""
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework import permissions
from django.contrib.auth.models import User
from .models import Movie, Rating, Comment
from .serializers import MovieSerializer, RatingSerializer, UserSerializer, CommentSerializer
from .permissions import IsAdminOrReadOnly


class UserViewSet(viewsets.ModelViewSet):
    """
    A simple viewset for viewing and editing user instances.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny, )


class MovieViewSet(viewsets.ModelViewSet):
    """
    A simple viewset for viewing and editing movie instances

    Methods
    -------
    rate_movie(methods=['POST'])
        creates or updates a user's movie rating

    """
    queryset = Movie.objects.all().order_by('release_date')
    serializer_class = MovieSerializer
    permission_classes = (IsAdminOrReadOnly, )
    authentication_classes = (TokenAuthentication, )

    @action(detail=True, methods=['POST'])
    def rate_movie(self, request, pk=None):
        """
        Creates or updates the user's movie rating:
            Called through /api/movies/:pk/rate_movie/

        :param request: the HTTP POST request
        :param pk: the primary key of the requested movie
        :return: the HTTP response with status

        """
        if 'stars' in request.data:
            movie = Movie.objects.get(id=pk)
            stars = request.data['stars']
            user = request.user

            try:
                rating = Rating.objects.get(user=user.id, movie=movie.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(user=user, movie=movie, stars=stars)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)


class RatingViewSet(viewsets.ModelViewSet):
    """
    A simple viewset for viewing rating instances

    update and create overridden and replaced by MovieViewSet.comment

    """
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    authentication_classes = (TokenAuthentication, )

    def update(self, request, *args, **kwargs):
        """
        Returns a 400 Bad Request response to any PUT requests
        """
        response = {'message': 'Please log in first'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        """
        Returns a 400 Bad Request response to any POST requests
        """
        response = {'message': 'Please log in first'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


class CommentViewSet(viewsets.ModelViewSet):
    """
    A simple viewset for viewing and editing movie instances

    update and create overridden and replaced by MovieViewSet.rate_movie

    """
    queryset = Comment.objects.all().order_by('date_created')
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    authentication_classes = (TokenAuthentication, )

    def create(self, request, *args, **kwargs):
        owner = request.user
        id = request.data['movie']
        movie = Movie.objects.get(pk=id)
        text = request.data['text']
        comment = Comment.objects.create(owner=owner, movie=movie, text=text)
        serializer = CommentSerializer(comment, many=False)
        response = {'message': 'Comment created', 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)
