import axios from "axios";
import { useState, useEffect } from "react";

export function UserFavoritesIndex(props) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    // Fetch the details of favorite movies when the component mounts
    const fetchFavoriteMovies = async () => {
      const favoriteMoviesData = [];

      for (const favorite of props.favs) {
        try {
          // Assuming that favorite.movie_id corresponds to a movie's id
        const response = await axios.get(
        `http://localhost:3000/movies/${favorite.item_id}.json`
        );

          // Push the movie data into the array
          favoriteMoviesData.push(response.data);
        } catch (error) {
          console.error("Error fetching favorite movie:", error);
        }
      }

      setFavoriteMovies(favoriteMoviesData);
    };

    fetchFavoriteMovies();
  }, [props.favs]);

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favoriteMovies.map((movie) => (
        <div key={movie.id}>
          {/* <h2>{movie.name}</h2> */}
          <img src={movie.image_url} width={150} alt={movie.name} />
          {/* <p>{movie.description}</p> Replace with the actual description field */}
        </div>
      ))}
    </div>
  );
}