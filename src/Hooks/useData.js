import { useEffect, useState } from 'react';

export function useData(URL) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {

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
      console.error('Error fetching data:', error);
    } 
    finally{
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
   
    
  };

  useEffect(() => {
    fetchData();
  }, []);


  return { movies, loading, fetchData, hasMore };
}

