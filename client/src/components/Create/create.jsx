import React, { useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {createDog, obtainTemperament } from "../../redux/actions/index";


export default function Create(){

    const dispatch = useDispatch();
    const temps = useSelector((state) => state.temperamentos);

    const [input, setInput] = useState({
        name: "",
        image: "",
        temperament: [],
        life_span: "",
        weight: "",
        height: "",
    });

    useEffect(() => {
        dispatch(obtainTemperament());
    }, []);

    return(
        <div>
            <Link to="/home">
                <button>Go Home</button>
            </Link>
            <h2>CREATE A BREED:</h2>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="e.g. John"></input>
                <label>Temperaments</label>
                <select></select>
                <label>LifeSpan:</label>
                <input type="text" placeholder="e.g. 10 years"></input>

            </div>
        </div>
    )

};