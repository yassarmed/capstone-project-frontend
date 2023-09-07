import axios from "axios";
import { useState, useEffect } from "react";
import {MoviesIndex} from "./MoviesIndex"
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
import {Signup} from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink"
export function Content() {

  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  
  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };

  useEffect(handleIndexMovies, []);
  
      const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
      const [currentMovie, setCurrentMovie] = useState({});

      const handleShowMovie = (movie) => {
          console.log("handleShowMovie", movie);
          setIsMoviesShowVisible(true);
          setCurrentMovie(movie);
        };
        
        const handleClose = () => {
          console.log("handleClose");
          setIsMoviesShowVisible(false);
        };

        // const handleDestroyMovie = (movie) => {
        //        console.log("handleDestroyMovie", movie);
        //        axios.delete(`http://localhost:3000/movies/${movies.id}.json`).then((response) => {
        //          setPhotos(movies.filter((p) => m.id !== movie.id));
        //          handleClose();
        //        });
        //      };

        const addToFavorites = (movie) => {
          if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
            setFavorites([...favorites, movie]);
          }
        };
        
        

     
    







  return (
    <div>
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
       <MoviesShow movie={currentMovie} addToFavorites={addToFavorites} />
      </Modal>
      <Login/>
      <LogoutLink/>
      <Signup/>
      <div>
  <h2>Favorite Movies</h2>
  <ul>
    {favorites.map((favorite) => (
      <li key={favorite.id}>{favorite.title}</li>
    ))}
  </ul>
</div>
    </div>
  )
}