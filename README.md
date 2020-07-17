# movieRater
The Nic Cage DTV movie rater: a Single Page Application (SPA) built with Reactjs function components and hooks, and Django-Rest-Framework with authentication and authorization.



## Installation
### The Backend
Clone this repository: 
    git clone git@github.com:ekelseya/movierater.git.

cd into MovieRaterAPI  

Start your virtual environment: 
    python3 -m venv tutorial-env

Install the requirements:
    pip install requirements.txt

Propagate the database schema:
    python3 manage.py migrate

Create a super user:
    python3 manage.py createsuperuser

Start the drf server:
    python3 manage.py runserver

Navigate to localhost:8000/api/ to browse the API.

Navigate to localhost:8000/admin/ to browse the Django admin panel.

Login with your super user credentials.

Movie records can be added through the admin panel, via Postman or through curl. You will need the authorization token for your superuser when not using the admin panel.

### The Frontend
Install npm or yarn if necessary.

cd into mvoierater  

Install dependencies: npm install or yarn install

Start the frontend server: npm start or yarn start

Navigate to localhost:3000

Sign in with your super user credentials or sign up as a new user.

Start rating movies!
