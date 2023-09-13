import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { UserFavoritesIndex } from "./UserFavoritesIndex";
import { Routes, Route } from "react-router-dom";
import {Home} from "./Home"
import { About } from "./About";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [favs, setFavs] = useState([]);
  const [favoriteMovies,setFavoriteMovies] = useState([])
  

  const addToFavorites = (movieDetails) => {
    axios
      .post("http://localhost:3000/favorites/add.json", { item_id: movieDetails.id })
      .then((response) => {
        console.log(favs);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const handleDestroyFavorite = (favorite_id) => {
    console.log("Favorite ID to delete:", favorite_id);
    axios.delete(`http://localhost:3000/favorites/${favorite_id}.json`).then((response) => {
      setFavoriteMovies(favoriteMovies.filter((f) => f.favorite_id !== favorite_id));
      handleClose();
    });
  };
  
 
    


  return (
    <div>
<Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/movies" element={<MoviesIndex movies={movies} onAddToFavorites={addToFavorites} onShowMovie={handleShowMovie}/>}/>
      <Route path="/logout" element={<LogoutLink/>}/>
      <Route path="/favorites" element={<UserFavoritesIndex favs={favs}
  setFavs={setFavs}
  onDestroyFavorite={handleDestroyFavorite}
  favoriteMovies={favoriteMovies}/>}/>
    </Routes>
    {/* <MoviesIndex
        movies={movies}
        onShowMovie={handleShowMovie}
        onAddToFavorites={addToFavorites}
      /> */}
      
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
        <MoviesShow movie={currentMovie} />
      </Modal>
      {/* <Login />
      <LogoutLink />
      
      <Signup /> */}
      {/* <UserFavoritesIndex
  favs={favs}
  setFavs={setFavs}
  onDestroyFavorite={handleDestroyFavorite}
  favoriteMovies={favoriteMovies}
  


/> */}

    </div>
  );
}
