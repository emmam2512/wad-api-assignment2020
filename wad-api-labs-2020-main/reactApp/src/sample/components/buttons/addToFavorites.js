import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {AuthContext} from "../../authContext"
import {addFavourites} from "../../../api/movie-api"

const AddToFavouriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const userContext = useContext(AuthContext);

  const handleAddToFavourites = e => {
    e.preventDefault();
    context.addToFavourites(movie.id);
    addFavourites(userContext.userName,movie.id)

  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavourites}
    >
      Add to Favourites
    </button>
  );
};

export default AddToFavouriteButton;