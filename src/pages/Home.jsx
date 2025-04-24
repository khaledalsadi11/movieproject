import React, { useEffect, useState } from 'react';
import MovieCard from "../component/MovieCard";
import Avatar from "../component/Avatar";
import Search from "../component/Search";
import PageLoader from "../component/Pageloader";
import { Link } from 'react-router-dom';
import "./Home.css";
import { useData } from '../Hooks/useData';
import { useHandleSearch } from '../Hooks/useHandleSearch';


function Home() {

    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

    const {movies,loading}=useData(URL);
    const {handleSearch}=useHandleSearch();


    return (
      <div>
        <div className='header'>      
          <Avatar/>
        <Search onSearch={handleSearch} />
        <Link className='Fav-link' to="/favorites">Favorites</Link>

        </div>


        {loading ? <PageLoader/> : <div className="movies-container">
          {movies.length > 0 ? (
            movies.map((movie) =>  
              
            <MovieCard 
            key={movie.id}
            id={movie.id} 
            title={movie.title}
            overview={movie.overview}
            posterpath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            
          />)
          ) : (
            <PageLoader/>
          )}
        </div> }

        
        
      </div>
    );
  }

  export default Home;