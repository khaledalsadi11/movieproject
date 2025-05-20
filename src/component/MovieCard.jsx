import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"



function movieCard(movie){

    
    return(
        
        <Link className="card-link" key={movie} to={`/movie/${movie.id}`}>
        <div className="movie-card fade-in slide-up">
            <img src={movie.posterpath} alt="" className="movie-image"/>
            <div className="movie-info">
                <h3 datta-testid="title_test" className="movie-title">{movie.title}</h3>
                <p className="movie-overview">{movie.overview}</p>
            </div>
            
        </div>
        </Link>


        
    );
}

export default movieCard;