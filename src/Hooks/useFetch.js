import { useState, useEffect, useCallback } from "react";

export function useFetch(movieId) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const fetchMovie = useCallback(async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch movie details");
      const data = await res.json();
      setMovie(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovie(url);
  }, [url]);

  return { movie, loading, error };
}
