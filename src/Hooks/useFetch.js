import { useState, useEffect } from "react";

export function useFetch(movieId) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;

      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch movie details");
        const data = await res.json();
        setMovie(data);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    };

    fetchMovie();
  }, [movieId]);

  return { movie, loading, error };
}
