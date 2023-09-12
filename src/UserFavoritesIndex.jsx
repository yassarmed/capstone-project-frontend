import React, { useState, useEffect } from "react";
import axios from "axios";

export function UserFavoritesIndex(props) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleClick = (favorite_id) => {
        props.onDestroyFavorite(favorite_id);
      };

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteMoviesData = [];

      for (const favorite of props.favs) {
        try {
          const response = await axios.get(
            `http://localhost:3000/movies/${favorite.item_id}.json`
          );

          favoriteMoviesData.push({
            ...response.data,
            favorite_id: favorite.id, 
          });
        } catch (error) {
          console.error("Error fetching favorite movie:", error);
        }
      }
      
      setFavoriteMovies(favoriteMoviesData);
      // console.log("here arefavorite movies", favoriteMovies[0]['favorite_id'])
    };

    

    fetchFavoriteMovies();
  }, [props.favs]);

  return (
    <div>
      <div className="container"></div>
      <h1>Favorite Movies</h1>
      {favoriteMovies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.image_url} width={150} alt={movie.name} />
          <button onClick={() => handleClick(movie.favorite_id)}>Delete Favorite</button>

        </div>
      ))}
    </div>
  );
}
