import React, { useEffect, useState } from 'react';
import MovieCard from "../component/MovieCard";
import Avatar from "../component/Avatar";
import Search from "../component/Search";
import PageLoader from "../component/Pageloader";
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Home.css";
import { useHandleSearch } from '../Hooks/useHandleSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/moviesSlice';
import ErrorBoundries from '../component/ErrorBoundries';

function Home() {
  const { handleSearch } = useHandleSearch();
  const dispatch = useDispatch();
  const { movies, loading, currentPage, hasMore } = useSelector((state) => state.movies);


  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies(1));
    }
  }, [movies.length]);

  const fetchNextPage = () => {
    dispatch(getMovies(currentPage + 1));
  };

throw new Error("Error");

  return (
    <div>
      <div className='header'>

        <Avatar/>
        <Search onSearch={handleSearch} />
        <Link className='Fav-link' to="/favorites">Favorites</Link>
      </div>
      
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={<PageLoader 
        />
        }
      >

        <div className="movies-container">
         {movies.map((movie, index) => (

  <MovieCard
    key={`${movie.id}-${index}`}
    id={movie.id}
    title={movie.tile}
    overview={movie.overview}
    posterpath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  />
  
))}

        </div>
        
      </InfiniteScroll>
    </div>
  );
}

export default Home;
