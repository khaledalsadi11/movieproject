import { useState, useEffect } from "react";

export function useSearch(query) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    
        const URL=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${encodeURIComponent(query)}`
        const fetchSearchResults = async () => {
          try {
            const res = await fetch(`${URL}&page=${page}`);
            const data = await res.json();
            setMovies(prev => [...prev, ...data.results]);

            if (page >= data.total_pages) {
              setHasMore(false);
            } else {
              setPage(prev => prev + 1);
            }

          } catch (error) {
            console.error("Search error:", error);
          } finally {
            setLoading(false);
          }
        };
    

        useEffect(() => {
          fetchSearchResults();

      }, [query]);

      return {movies,loading,fetchSearchResults,hasMore};

      

}
