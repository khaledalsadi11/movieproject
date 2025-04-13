import React, { useRef } from "react";

function Search({onSearch}) {
  const inputRef = useRef();

  return (
    <div className="Search_bar">
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(inputRef.current.value);
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
