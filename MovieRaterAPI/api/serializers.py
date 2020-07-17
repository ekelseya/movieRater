"""
Create serializers for the app viewsets: User, Movie, and Rating

Classes:

    UserSerializer
    MovieSerializer
    RatingSerializer

Functions:

    see https://www.django-rest-framework.org/api-guide/serializers/
        for all inherited actions

    create(validated_data) -> overrides the default create method to create an
        authentication token when a user is created.

"""
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import Movie, Rating, Comment


class UserSerializer(serializers.ModelSerializer):
    """
    A simple serializer class to render user data as JSON objects

    Methods
    -------
    create(validated_data)
        overrides the default create method
    """
    class Meta:
        """
        Automatically generates a set of fields based on the User model
        """
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        """
        Overrides the default create method to create an authentication token
        when a user is created.
        :param validated_data: the validated username and password
        :return: user
            returns the new user instance
        """
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class MovieSerializer(serializers.ModelSerializer):
    """
    A simple serializer class to render movie data as JSON objects
    """
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        """
        Automatically generates a set of fields based on the Movie model
        """
        model = Movie
        fields = ('id', 'title', 'description', 'num_ratings', 'avg_rating', 'year_released', 'comments')


class RatingSerializer(serializers.ModelSerializer):
    """
    A simple serializer class to render rating data as JSON objects
    """
    class Meta:
        """
        Automatically generates a set of fields based on the Rating model
        """
        model = Rating
        fields = ('id', 'user', 'movie', 'stars')


class CommentSerializer(serializers.ModelSerializer):
    """
    A simple serializer class to render comment data as JSON objects
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        """
        Automatically generates a set of fields based on the Comment model
        """
        model = Comment
        fields = ('id', 'owner', 'movie', 'text', 'date_created')
