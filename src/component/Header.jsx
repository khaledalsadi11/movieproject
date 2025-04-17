import React from "react";
import Avatar from "./Avatar";
import Search from "./Search";
import React, { useEffect, useState } from 'react';


function Header(){
    const [movies, setMovies] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false); 
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
    return(
            <div className='header'>      
        <Avatar/>
        <Search onSearch={handleSearch} />
        </div>


    );
}

export default Header;