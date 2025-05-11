import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../component/MovieCard";
import PageLoader from "../component/Pageloader";
import "./searchResult.css";
import { useSearch } from "../Hooks/useSearch";
import InfiniteScroll from "react-infinite-scroll-component";

function SearchResults() {
  const { query } = useParams();
  const {movies,loading,fetchSearchResults,hasMore}=useSearch(query);
 
  return (
    <div className="search-results">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchSearchResults}
        hasMore={hasMore}
        loader={<PageLoader  />}
        ß 
      >
      <h2 className="result">Search Results for: "{query}"</h2>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="movies-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                posterpath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
      </InfiniteScroll>
    </div>
  );
}

export default SearchResults;
