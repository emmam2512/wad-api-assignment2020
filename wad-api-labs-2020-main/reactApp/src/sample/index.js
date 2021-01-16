import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Profile } from "./pages";
import HomePage from '../sample/pages/homePage'
import Movies from '../sample/pages/movieDetailsPage'
import Favourites from "../sample/pages/favoritesMoviesPage"
import Upcoming from '../sample/pages/upcomingMoviesPage'
import TopRated from '../sample/pages/topRatedMoviesPage'
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import AuthProvider from "./authContext";
import MovieProvider from "../sample/contexts/moviesContext";
import GenresContextProvider from "../sample/contexts/genresContext";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <p>
            Movies
          </p>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <MovieProvider>
          <GenresContextProvider>
           <Switch>
            <Route path="/public" component={PublicPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />,
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path="/favourites" component={Favourites} />
            <PrivateRoute path="/upcoming" component={Upcoming} />
            <PrivateRoute path="/toprated" component={TopRated} />
            <PrivateRoute path="/movies/:id" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
           </Switch>
          </GenresContextProvider>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
