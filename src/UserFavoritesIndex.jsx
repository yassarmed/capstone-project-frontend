export function UserFavoritesIndex(props) {
  return(
    <div>
    <h1>Favorite Movies</h1>
       {props.favs.map((favs) => (
         <div key={favs.id}>
           <h2>{favs.item_id}</h2>
           <img src={favs.image_url} alt="Movie Image"/>
    
         </div>
       ))}
  </div>

  )
  
}
