import axios from "axios";
import { useState, useEffect } from "react";
import {MoviesIndex} from "./MoviesIndex"
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
export function Content() {
  
  // const movies = [
  //   {id: 1, name: "NightCrawler", image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbW4BQAc3CFRi0d0FNLDLQ5decqoImWo2keQ&usqp=CAU", description: "Cool movie!", category: "Thriller"  },
  // ];

  const [movies, setMovies] = useState([]);
  
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

        const handleDestroyMovie = (movie) => {
               console.log("handleDestroyMovie", movie);
               axios.delete(`http://localhost:3000/movies/${movies.id}.json`).then((response) => {
                 setPhotos(movies.filter((p) => m.id !== movie.id));
                 handleClose();
               });
             };
        

    
    







  return (
    <div>
      <MoviesIndex movies={movies} onShowMovie={handleShowMovie}/>
      <Modal show={isMoviesShowVisible} onClose={handleClose}>
       <MoviesShow movie={currentMovie} onDestroyMovie={handleDestroyMovie} />
      </Modal>
    </div>
  )
}