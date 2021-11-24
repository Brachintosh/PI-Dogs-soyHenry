import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

export default function Landing() {
    return(
        <div className="container">
            <div className="link-home">
                <Link to='/home'>
                    <button className="access-btn">ENTER</button>
                </Link>
            </div>
        </div>
    );
};