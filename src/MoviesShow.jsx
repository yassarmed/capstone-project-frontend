export function MoviesShow(props) {
  // const handleClick = () => {
  //   props.onDestroyMovie(props.movie);
  // };

  
  const handleAddToFavorites = () => {
    props.addToFavs(props.movie);
  };
  return (
    <div>
      <h1>{props.movie.name}</h1>
      <p>{props.movie.description}</p>
      <h3>{props.movie.category}</h3>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
}
