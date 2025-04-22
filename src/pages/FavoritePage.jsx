import { useContext } from 'react';
import MovieCard from '../component/MovieCard';
import { FavoritesContext } from '../component/Favoraties';
import FavoriteButton from '../component/FavButton';

const FavoritePage = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) return <p>No favorite movies yet.</p>;

  return (
    <div><h1 style={{color:"white",margin:"50px"}}>Favoraties</h1>
    <div className="movies-container">
      {favorites.map((movie) => (
        <MovieCard 
        key={movie.id}
        id={movie.id} 
        title={movie.title}
        overview={movie.overview}
        posterpath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      /> 
      ))}
    </div>


    </div>
  );
};

export default FavoritePage;
