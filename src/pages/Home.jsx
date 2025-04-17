import React, { useEffect, useState } from 'react';
import MovieCard from "../component/MovieCard";
import Avatar from "../component/Avatar";
import Search from "../component/Search";
import PageLoader from "../component/Pageloader";
import { Link } from 'react-router-dom';
import "./Home.css";







function Home() {
const [movies, setMovies] = useState([]);
const [isSearching, setIsSearching] = useState(false);
const [loading, setLoading] = useState(false); 


const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;
console.log(URL);

const fetchData = async () => {
  setLoading(true);

  try {
    const response = await fetch(URL);
    const data = await response.json();
    setMovies(data.results);
    setIsSearching(false);
  } catch (error) {
    console.error("Error fetching data:", error);
  } 
  setTimeout(() => {
      setLoading(false);
    }, 1500);
    
  
};


useEffect(() => {
  fetchData();
}, []);



const handleSearch = async (query) => {
  setLoading(true);
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setMovies(data.results);
    setIsSearching(true);
  } catch (error) {
    console.error("Error searching:", error);
  } 
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  
};
    return (
      <div>
        <div className='header'>      
          <Avatar/>
        <Search onSearch={handleSearch} />
  
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