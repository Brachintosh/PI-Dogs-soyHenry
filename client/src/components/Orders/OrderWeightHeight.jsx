import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { orderBy_Weight } from '../../redux/actions/index';

//TODO: ARMAR EL ORDER EN EL BACK Y LLAMARLO EN UNA ACTION, LA ACTION SE ACTIVA VIA DISPATCH ACA...

export default function OrderByWeight() {
    const dispatch = useDispatch();
    
    
    function handleSortWeight(e){
        e.preventDefault();
        dispatch(orderBy_Weight(e.target.value));
    };


    return( <div>
                <p><u>Order By: </u></p>
                <select  onChange={(e) => handleSortWeight(e)} >
                    <option value='initial' >Select from...</option>
                    <option value='min' > Min.Weight</option>
                    <option value='max' >Max.Weight</option>
                </select>
            </div>

    )
};