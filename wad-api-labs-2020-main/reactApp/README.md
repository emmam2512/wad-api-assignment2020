# Assignment 2 - Web API.

Name: Emma Murphy

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Upcoming movies - the upcoming database was added to my api, where the user can see a few movies that are coming out soon.
 + Favourites - added favourites to the homepage which also adds to mongo database.
 + Movie details page = when a user clicks on a movie it displays information on that movie.
 + Top Rated - the top rated database was added to my api where the user can see top rated movies.
 + Filter controls - The user is able to filter movies based on what they search.

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
installed node.js onto my machine from https://nodejs.org/en/download/

installed npm using:
npm install

installed the mongo database:
from https://www.mongodb.com/try/download/community
Created a folder in which the database can be stored:
mkdir data 
cd data
mkdir db



## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

Added an simple configuration env file and passed in certain variables such as my react app tmdb key, 
```bat
NODE_ENV=production
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
REACT_APP_TMDB_KEY=YOUR KEY
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/upcoming | gets all upcoming movies
| /api/movies/topRated | gets all toprated movies
| /api/users/${username}/favourites | posts movie to users favourite list
| /api/users/${username}/favourites | gets specific user favourite movies
| /api/users | login
| /api/users?action=register' | posts signup details to database




## Security and Authentication
I have Authentication on upcoming toprated favorites etc which are all private routes, jwt authentication and passport from labs are successfully working on routes as a user must login to be able to view the pages.


The following routes are protected and require a user to login to view them.
<PrivateRoute path="/favourites" component={Favourites} />
<PrivateRoute path="/upcoming" component={Upcoming} />
<PrivateRoute path="/toprated" component={TopRated} />
<PrivateRoute path="/movies/:id" component={Movies} />

## Integrating with React App

I copied my assignment 1 app files and intergrated it with react app and replaced the tmdb api with a new api and that api then used the databases i created which store the seed data. 



~~~Javascript
  export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
~~~

## Extra features

- Favourites page




