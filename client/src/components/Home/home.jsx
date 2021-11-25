// Necesitamos los Perros del back-end ---> (puerto:3001)
// Escucho y mapear el estado de los dogs y por cada uno se renderiza una SingleCard.

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtainDogs, obtainTemperament } from "../../redux/actions";
import SingleCard from '../Cards/SingleCards.jsx';


//TODO: ver como meter el paginado en el home, armar la carta de cada perro con info basica,

export default function Home(){

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.perros);
    
    
    useEffect(() => {           
        dispatch(obtainDogs()); // Despacho la accion invocando a la funcion. [[mapDispatchToProps]]
        dispatch(obtainTemperament());
    }, [dispatch]) // Lo que se incluye en el array es lo que depende el componente para funcionar.

    function handleClick(e) { // Botón para recargar la pagina
        e.preventDefault();
        dispatch(obtainDogs());
    }

    return(
        
    <div>
        <div>*/ este div puede ser un componente de navBar y cada ordenamiento tmb/* 
            <Link to='/create_breed' >Create Breed</Link>
            <h1>DogSite</h1>
            <button onClick={e => {handleClick(e)}} >Reload</button>
        </div>
        <div>
            <select>
                <option value='initial'>Alfabeticamente</option>
                <option value='asc' >Ascendente</option>
                <option value='desc' >Descendente</option>
            </select>
            <select>
                <option value='initial' >Seleccione...</option>
                <option value='weight' >Peso</option>
                <option value='height' >Altura</option>
            </select>
            <select>
                <option value='All' >All Breeds</option>
                <option value='api' >Existentes</option>
                <option value='db' >Creados</option>
            </select>

            {
            
                allDogs && allDogs.map( el => {
                    return (
                    <fragment>
                        <Link to={'/home/'+ el.id} style={{textDecoration: "none", color:"black"}} >
                            <SingleCard key={el.id}
                            id={el.id} name={el.name} image={el.image}
                            temperament={el.temperament? el.temperament: el.temperaments } 
                            minWeight={el.minWeight}
                            maxWeight={el.maxWeight}
                            />
                        </Link>
                    </fragment>
                );
            })}

        </div>
    </div>
    )
};