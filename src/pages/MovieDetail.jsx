import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./MovieDetail.css";
import { useContext } from 'react';
import FavoriteButton from '../component/FavButton';


function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
      console.log(url);

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch movie details');
        const data = await res.json();
        setMovie(data);
      } catch (e) {
        setError(e.message);
      } 
        setLoading(false);
      
    };

    fetchMovie();
  }, [movieId]);

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
