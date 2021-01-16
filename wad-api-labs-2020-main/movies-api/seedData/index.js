import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import {movies} from './movies.js';
import upcomingMoviesModel from '../api/movies/upcomingMoviesModel';
import topRatedModel from '../api/movies/topRatedModel';
import {upcomingMovies} from './upcomingMovies.js'
import {topRatedMovies} from './topRatedMovies.js'

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
    console.log('load user Data');
      try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
      } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
      }
    }
    // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}
export async function loadUpcomingMovies() {
  console.log('load seed data');
  console.log(upcomingMovies.length);
  try {
    await upcomingMoviesModel.deleteMany();
    await upcomingMoviesModel.collection.insertMany(upcomingMovies);
    console.info(`${upcomingMovies.length} upcomingMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}
export async function loadTopRatedMovies() {
  console.log('load seed data');
  console.log(topRatedMovies.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRatedMovies);
    console.info(`${topRatedMovies.length} topRatedMovies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

