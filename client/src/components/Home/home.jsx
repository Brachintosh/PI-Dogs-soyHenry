// Necesitamos los Perros del back-end ---> (puerto:3001)
// Escucho y mapear el estado de los dogs y por cada uno se renderiza una SingleCard.

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtainDogs, obtainTemperament, filterByBreeds } from "../../redux/actions";
import SingleCard from '../Cards/SingleCards.jsx';
import Paginado from '../Paginado/Paginado.jsx';
// import FilterTemps from '../FilterTemps/FilterTemps';
import './Home.css';


//TODO: ver como meter el paginado en el home, armar la carta de cada perro con info basica,

export default function Home(){

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.perros);
    
    // Creo varios estados para usar en el paginado:
    const [currentPage, setCurrentPage] = useState(1);      // La pagina actual siempre va a ser la primera.
    const [dogsPerPage, setDogsPerPage] = useState(8);      // Cuantas cartas por pagina voy a renderizar.
    const indexOfLastDog = currentPage * dogsPerPage;        // Indice del último perrito de la pagina. [ 0 -7 ]
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;    // Indice del primer perrito de la pagina.
    const currentDogs = allDogs?.slice(indexOfFirstDog, indexOfLastDog); // Va a contener los que estan en la pagina actual.
    const length = allDogs?.length;
    // Estando en la pagina 1, el indice del primero es 0 y del ultimo es 8.
    // Estando en la pagina 2, el indice del primero es 6 y del ultimo es 16.

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)      // Va guiando al renderizado.
    }

    useEffect(() => {           
        // dispatch(obtainDogs()); // Despacho la accion invocando a la funcion. [[mapDispatchToProps]]
        dispatch(obtainTemperament());
    }, [dispatch]) // Lo que se incluye en el array es lo que depende el componente para funcionar.

    function handleClick(e) { // Botón para recargar la pagina
        e.preventDefault();
        dispatch(obtainDogs());
    }

    function handleFilterByBreeds(e){
        dispatch(filterByBreeds(e.target.value));
    }

    return(
        
    <div>
        <div>*/ este div puede ser un componente de navBar y cada ordenamiento tmb/* 
            <Link to='/create_breed' >Create Breed</Link>
            <h1>DogSite</h1><br/>
            <button onClick={e => {handleClick(e)}} >Reload</button>
        </div><br/>
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
                <select onChange={e => handleFilterByBreeds(e)}>
                    <option value='All' >All Breeds</option>
                    <option value='temperament' >Existentes</option>
                    <option value='createdInDb' >Creados</option>
                </select>



            <Paginado  
                dogsPerPage = {dogsPerPage}
                allDogs = {length}
                paginado = {paginado}
            />

            <div className='container-cards'>
            {
             currentDogs?.map( el => {
                    return (
                        <Link to={'/home/'+ el.id} style={{textDecoration: "none", color:"black"}} >
                            <SingleCard key={el.id}
                            id={el.id} name={el.name} image={el.image}
                            temperament={el.temperament? el.temperament: el.temperament } 
                            life_span={el.life_span}
                            weight={el.weight}
                            height={el.height}
                            />
                        </Link>
                );
            })
            }
        </div>

        </div>
    </div>
    )
};