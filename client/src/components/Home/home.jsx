// import SingleCard from "./singleCard"; ???
// Necesitamos los Perros del back-end ---> (puerto:3001)
// Escucho y mapear el estado de los dogs y por cada uno se renderiza una SingleCard.

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtainDogs, obtainTemperament } from "../../redux/actions";

//TODO: ver como meter el paginado en el home, armar la carta de cada perro con info basica,

export default function Home(){

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.perros);
    
    
    useEffect(() => {           
        dispatch(obtainDogs()); 
        dispatch(obtainTemperament());
                
    }, [dispatch])

    return(
        
        <div>
            <div>

                <h2>Perros !</h2> <hr/>
                <span>La info va aca...</span>
            </div>
        </div>
    )
};