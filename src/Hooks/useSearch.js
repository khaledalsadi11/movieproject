import { useState, useEffect } from "react";

export function useSearch(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(query)}`
        const fetchSearchResults = async () => {
          try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
          } catch (error) {
            console.error("Search error:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchSearchResults();
      }, [query]);

      return {movies,loading};

      

}
