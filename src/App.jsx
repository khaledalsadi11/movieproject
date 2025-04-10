import React from 'react';
import MovieCard from "./component/MovieCard";
import MoviesDetail from "./moviesDetails";
import Avatar from "./component/Avatar";


function CreateCard(movie){
    return(
        <MovieCard 
        key={movie.id}
        title={movie.title}
        overview={movie.overview}
        posterpath={movie.posterpath}/>
    );
}

function App() {

    return(
        <div>
            <Avatar/>
            {MoviesDetail.map(CreateCard)} 
        </div>
    );
}

export default App;
