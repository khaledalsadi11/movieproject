import React from "react";
import "./pageLoader.css"

function FullPageLoader(load) {

 
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  export default FullPageLoader;
  