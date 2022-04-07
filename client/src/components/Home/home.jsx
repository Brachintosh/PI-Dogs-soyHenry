// Necesitamos los Perros del back-end ---> (puerto:3001)
// Escucho y mapear el estado de los dogs y por cada uno se renderiza una SingleCard.

import React from 'react';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtainDogs, obtainTemperament } from "../../redux/actions/index";
import OrderAZ from '../Orders/OrderAZ.jsx';
import SingleCard from '../Cards/SingleCards.jsx';
import SearchBar from '../SearchBar/SearchBar';
import Paginado from '../Paginado/Paginado.jsx';
import FilterByBreeds from '../Filters/FilterByBreed.jsx';
import OrderByWeight from '../Orders/OrderWeightHeight.jsx';
import FilterTemps from '../Filters/FilterTemps.jsx';
import './Home.css';


export default function Homie(){

    const dispatch = useDispatch();
    const allDogs = useSelector((state) => state.perros);
    
    // Creo varios estados para usar en el paginado:
    const [currentPage, setCurrentPage] = useState(1);      // La pagina actual siempre va a ser la primera.
    // eslint-disable-next-line
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
        dispatch(obtainDogs());
        dispatch(obtainTemperament());
    }, [dispatch])

    return(
        
    <div className='home-container'>
    
        <div>
            <div className='order-filter' style={{ color:"black"}}>
                <div className='sort-az'>
                    <OrderAZ paginaLocal={setCurrentPage} />
                </div>
                <div className='order-weight'>
                    <OrderByWeight paginaLocal={setCurrentPage} />
                </div>
                <div className='filter-breed'>
                    <FilterByBreeds paginaLocal={setCurrentPage} />
                </div>
                <div className='filter-temp'>
                    <FilterTemps paginaLocal={setCurrentPage} />
                </div>
            </div>

            <SearchBar paginaLocal={setCurrentPage} />
            <Paginado  
                value={currentPage}
                dogsPerPage = {dogsPerPage}
                allDogs = {length}
                paginado = {paginado}
            />            

            <div className='container-cards'>
            {
                currentDogs?.map( el => {
                    return (
                        <Link to={'/home/'+ el.id} style={{textDecoration: "none", color:"black"}} key={el.id} >
                            <SingleCard
                                key={el.id}
                                id={el.id}
                                name={el.name}
                                image={el.image? el.image : <img src="https://www.lookslikefilm.com/wp-content/uploads/2019/02/Michelle-Fernandes-Fox-www.wearefoxphotography.com_.jpg" alt="a puppy" /> } // pasarle una imgen default si no la provee [[ pero no anda el default... (?) ]]
                                temperament={el.temperament? el.temperament : el.Temperaments } 
                                weight={el.weight}
                            />
                        </Link>
                        );
                    })
                }
            </div>
        </div>
    </div>
    );
};