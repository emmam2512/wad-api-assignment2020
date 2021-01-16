import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'
import {AuthContext} from "../authContext" 


const FavouriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);
  // const favorites = context.movies.filter( m => m.favorite )
  
  if (userContext.isAuthenticated) {
    var userFavourites = async() => {
      let favMovies = await userContext.getUserFavourites(userContext.userName);
      console.log(favMovies);
      return favMovies;
    }
    userFavourites().then(userFav => setFavourites(userFav));

  
  
  return (
    <MovieListPageTemplate
      movies={favourites}
      title={"Favourite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}

export default FavouriteMoviesPage;
