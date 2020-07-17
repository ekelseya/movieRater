"""
Create database schema for the app models: Movie, and Rating

Classes:

    Movie
    Rating

Functions:

    num_ratings() -> retrieves the number of ratings associated with a movie
    avg_rating() -> retrieves a movie's ratings and returns the average

"""
from datetime import date
from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Movie(models.Model):
    """
    A simple model class to define the Movie schema

    Methods
    -------
    num_ratings()
        retrieves the number of ratings associated with a movie
    avg_rating()
        retrieves a movie's ratings and returns the average
    """
    # TODO: fix release date
    # TODO: def str
    title = models.CharField(max_length=60)
    release_date = models.DateField(default=date.today)
    description = models.TextField()

    def __str__(self):
        return self.title

    def num_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def avg_rating(self):
        sum = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            sum += rating.stars
        if len(ratings) > 0:
            return sum / len(ratings)
        else:
            return 0

    def year_released(self):
        return self.release_date.year


class Rating(models.Model):
    """
    A simple model class to define the Rating schema
    Each rating has a one to many relation to both users and movies
    Each user can only have one rating for each movie
    """
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])

    class Meta:
        """
        Each user can only rate a movie once, and the user and movie will be
        indexed together
        """
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'),)

    def __str__(self):
        return self.movie


class Comment(models.Model):
    """
    A simple model class to define the Comment schema
    Each comment has a one to many relation to both users and movies
    """
    movie = models.ForeignKey(Movie, related_name='comments', on_delete=models.CASCADE)
    owner = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    text = models.TextField()
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.text
