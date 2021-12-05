import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){

    return (
        <div className='NavBar'>
          <div className='landing-link'>
            <img src="../../images/logotipo1a.jpg" alt="DogSite Logo"/>
            <Link  style={{textDecoration: "none", color:"white"}} to="/">DogSite  </Link>
          </div>
            <div className='links-nav' >
                  <Link  style={{textDecoration: "none", color:"white"}} to="/Home">Home  </Link>
                  <Link  style={{textDecoration: "none", color:"white"}} to="/create_breed">Create  a Breed</Link>
                  <Link  style={{textDecoration: "none", color:"white"}} to="/About">  About</Link>
            </div>
        </div>
      )
};