import React from 'react';
import { useDispatch } from 'react-redux';
import { orderBy_AZ } from '../../redux/actions/index';

export default function Order() {
    let dispatch = useDispatch();


    function onselectionchange(e) {
        // console.log(e.target.value);
        dispatch(orderBy_AZ(e.target.value));
    };

    return(
        <select name='select' onChange={e => onselectionchange(e)}>
            <option value='initial'>Alfabeticamente</option>
            <option value='asc' >Ascendente</option>
            <option value='desc' >Descendente</option>
        </select>
    )
};
