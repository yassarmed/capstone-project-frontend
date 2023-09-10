
export function MoviesIndex(props) {
  return (
    <div>
      <h1>All Movies</h1>
      {props.movies.map((movie) => (
         <div key={movie.id}>
           <img src={movie.image_url} width={150} />
           <p>{movie.name}</p>
           <button onClick={()=> props.onShowMovie(movie)}>More info</button>
           <button onClick={() => props.onAddToFavorites(movie)}>Add to Favorites</button>

         </div>
       ))}
    </div>
  );
}