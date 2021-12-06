import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtainDogs, obtainTemperament, filterByBreeds } from "../../redux/actions/index";

export default function FilterByBreeds() {
    const dispatch = useDispatch();

    useEffect(() => {           
        dispatch(obtainDogs()); // Despacho la accion invocando a la funcion. [[mapDispatchToProps]]
        dispatch(obtainTemperament());
    }, [dispatch])

    function handleFilterByBreeds(e){
        e.preventDefault();
        dispatch(filterByBreeds(e.target.value));
    }

    return ( <div>
                <p><u>Filter from:</u></p>
                <select onChange={e => handleFilterByBreeds(e)}>
                            <option value='All' >All Breeds</option>
                            <option value='temperament' >API Breeds</option>
                            <option value='createdInDb' >Created Breeds</option>
                </select><br/><br/>
            </div>
    )
};