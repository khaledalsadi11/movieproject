import React from "react";
import Avatar from "./Avatar";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useHandleSearch } from '../Hooks/useHandleSearch';
import "./NavBar.css";


export function NavBar() {
      const { handleSearch } = useHandleSearch();


    return (
        <div className="nav-bar">
             <Avatar className="logo"/>
        <Search onSearch={handleSearch} className="search" />
        <Link className='Fav-link' to="/favorites">Favorites</Link>
            
        </div>
    );


}