import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./search.css"


function Search({onSearch}) {
  const inputRef = useRef();
  const navigate = useNavigate();


  return (
    <div className="Search_bar">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(inputRef.current.value);
        const query = inputRef.current.value.trim();
    if (query) 
      {
      navigate(`/search/${encodeURIComponent(query)}`);
    }
      }}>
        <input ref={inputRef} className="search" type="search" />
        <button className="Search_btn" type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Search;