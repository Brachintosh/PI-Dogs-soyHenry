import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { filterByTemps } from '../../redux/actions/index';

export default function FilterTemps({paginaLocal}) {
    const allTemps = useSelector((state) => state.temperamentos);
    // console.log(allTemps)
    
    const dispatch = useDispatch();


    function onInputChange(e) {
        e.preventDefault();
        paginaLocal(1);
        dispatch(filterByTemps(e.target.value))
    }

    return (
        <div>
            <p><u>Filter from:</u></p>
            <select 
                onChange={onInputChange} 
                style={{fontFamily: "Audiowide, sans-serif", letterSpacing: "1.1px"}} >
               
                <option name='Temperaments' key='keyT'> Temperaments </option>

                {allTemps && allTemps.map((e) => (
                <option key={e.id} value={e.name} >{e.name}</option>
                ))}

            </select>
        </div>
    );
};