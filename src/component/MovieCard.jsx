import React from "react";



function movieCard(movie){
    return(
        <div class="movie-card">
            <img src={movie.posterpath} alt="" className="movie-image"/>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>

        
    );
}

export default movieCard;