import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar(){

    return (
        <div className='NavBar'>
          <h5>NAVBAR</h5>
            <div >
                <ul className='nav-link'>
                    <Link  style={{textDecoration: "none", color:"white"}} to="/Home">Home  </Link>
                    <Link  style={{textDecoration: "none", color:"white"}} to="/create_breed">Create a Breed  </Link>
                    <Link  style={{textDecoration: "none", color:"white"}} to="/About">  About</Link>
                </ul>
            </div>
          <hr />
        </div>
      );
};