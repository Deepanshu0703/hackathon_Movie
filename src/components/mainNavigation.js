import React from 'react';
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import "./mainNavigation.css";
function MainNavigation(){
  const [ins,setIns]=useState(false);
  const handle=()=>{
    if(localStorage.getItem("userid")!==null){
      setIns(true);
    }
    else{
      setIns(false);
    }
  }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#" style={{ marginLeft: "40px" }}>
            MoviesThug..
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mr-auto myNav"
              style={{ margin: "0 auto" }}
            >
              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/home/">Home</NavLink>
              </li>
              <li
                className="nav-item active "
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/recommendations">Recommendations</NavLink>
              </li>
              <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
              >
                <NavLink to="/about">About</NavLink>
              </li>

              {ins ?<li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
                onClick={handle}
              >
                <NavLink to="/loginPage">Login</NavLink> 
              </li> : <li
                className="nav-item active"
                style={{ margin: "0 10px 10px 40px" }}
                onClick={handle}
                >
                <NavLink to="/logout">Logout</NavLink>
              </li>
              }
              
            </ul>
            <form className="form-inline my-2">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn  my-2 my-sm-0 myBtn" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
}
export default MainNavigation;