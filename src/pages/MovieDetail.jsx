import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./MovieDetail.css";
import { useContext } from 'react';
import FavoriteButton from '../component/FavButton';
import { useFetch } from '../Hooks/useFetch';

function MovieDetail() {
  const { movieId } = useParams();
  const {error, loading, movie} = useFetch(movieId);
  
  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>{error}</p>;



 

  return (
    <div className="movie">

      <Link className='link' to="/">Back</Link>
      <Link className='Fav-link-D' to="/favorites">Favorites</Link>

      <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3 className='movie-title'>{movie.title}</h3>
      <div className='movie-detail'>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating:{movie.vote_average}</p>
      </div>

      <FavoriteButton movie={movie} />






     

    </div>
  );
}

export default MovieDetail;
