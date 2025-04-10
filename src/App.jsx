import React, { useEffect, useState } from 'react';
import MovieCard from "./component/MovieCard";
import MoviesDetail from "./moviesDetails";
import Avatar from "./component/Avatar";


function CreateCard({ movie }) {
    return (
        <MovieCard 
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterpath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
    );
}

function App() {
    const [movies, setMovies] = useState([]);

    const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setMovies(data.results); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div>
            <Avatar /> 
            {movies.length > 0 ? (  
                movies.map((movie) => CreateCard({ movie }))  
            ) : (
                <p>Loading movies...</p>  
            )}
        </div>
    );
}

export default App;
