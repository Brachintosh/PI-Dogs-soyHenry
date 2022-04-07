import React from "react";
import { Link } from "react-router-dom";
import './Landing/landing.css';

export default function Landing() {
    return(
        <div className="container">
            <div className="link-home">
                <Link to='/home' style={{textDecoration:"none"}}>
                <h2>Welcome to DogSite the place where you learn more about your dogs!</h2><br />
                    <button className="access-btn">ENTER</button>
                </Link>
            </div>
        </div>
    );
};