import axios from "axios";
import { useState, useEffect } from "react";
import {MoviesIndex} from "./MoviesIndex"
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
import {Signup} from "./Signup"
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink"
import { UserFavoritesIndex} from "./UserFavoritesIndex";
export function Content() {

  // const favs = [
  //   {id: 1, user_id: 1, item_id: 1}
  // ]

  const [movies, setMovies] = useState([]);
  const [favs, setFavs] = useState([]);
  
  
  const handleIndexMovies = () => {
    console.log("handleIndexMovies");
    axios.get("http://localhost:3000/movies.json").then((response) => {
      console.log(response.data);
      setMovies(response.data);
    });
  };
  const handleIndexUserFavorites = () => {
    console.log("handleIndexUserFavorites");
    axios.get("http://localhost:3000/favorites.json").then((response) => {
      console.log(response.data);
      setFavs(response.data);
    });
  };


  useEffect(handleIndexMovies, []);
  useEffect(handleIndexUserFavorites, []);
  
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

        const addToFavs = (movie) => {
          if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
            axios
              .post(`http://localhost:3000/favorites.json`, { movie_id: movie.id },)
              .then((response) => {
                setFavorites([...favorites, movie]);
              })
              .catch((error) => {
                console.error("Error adding movie to favorites:", error);
              });
          }
        };

        // const removeFromFavorites = (movie) => {
        //   axios
        //   .delete(`http://localhost:3000/favorites/${movie.id}`)
        //   .then((response)=>{
        //     const updatedFavorites = favorites.filter(
        //       (favMovie) => favMovie.id !== movie.id
        //     )
        //     setFavorites(updatedFavorites)
        //   })
        //   .catch((error)=>{
        //     console.error("Error removing movie from favorites:", error)
        //   })
        // }
        
        

     
    







  return (
    <div>
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
       <MoviesShow movie={currentMovie} />
      </Modal>
      <Login/>
      <LogoutLink/>
      <Signup/>
      <UserFavoritesIndex favs={favs}/>
      </div>

  )
}