import { useContext } from 'react';
import { FavoritesContext } from './Favoraties';
import "./FavButton.css";

const FavoriteButton = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const favorite = isFavorite(movie.id);

  const handleClick = () => {
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <button className='Fav-btn' onClick={handleClick}>
      {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
  );
};


export default FavoriteButton;
