import React, { useEffect, useState } from 'react';

  
  export function useData(URL){
    const [movies, setMovies] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false);

  
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

      

    return {movies,loading};
}
