import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { obtainDogs, obtainTemperament, filterByBreeds } from "../../redux/actions/index";

export default function FilterByBreeds({paginaLocal}) {
    const dispatch = useDispatch();

    useEffect(() => {           
        dispatch(obtainDogs()); // Despacho la accion invocando a la funcion. [[mapDispatchToProps]]
        dispatch(obtainTemperament());
    }, [dispatch])

    function handleFilterByBreeds(e){
        e.preventDefault();
        paginaLocal(1); // Actualizo el filtro a la pagina inicial.
        dispatch(filterByBreeds(e.target.value));

    }

    return ( <div>
                <p><u>Filter from:</u></p>
                <select onChange={handleFilterByBreeds}>
                            <option value='All' >All Breeds</option>
                            <option value='temperament' >API Breeds</option>
                            <option value='createdInDb' >Created Breeds</option>
                </select><br/><br/>
            </div>
    )
};