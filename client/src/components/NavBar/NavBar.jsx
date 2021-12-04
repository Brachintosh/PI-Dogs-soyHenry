import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){

    return (
        <div className='NavBar'>
          <Link className='landing-link' style={{textDecoration: "none", color:"white"}} to="/">DogSite  </Link>
            <div className='links-nav' >
                <ul>
                  <ul><Link  style={{textDecoration: "none", color:"white"}} to="/Home">Home  </Link></ul>
                  <ul><Link  style={{textDecoration: "none", color:"white"}} to="/create_breed">Create  a Breed</Link></ul>
                  <ul><Link  style={{textDecoration: "none", color:"white"}} to="/About">  About</Link></ul>
                </ul>
            </div>
        </div>
      );
};