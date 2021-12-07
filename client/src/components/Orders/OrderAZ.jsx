import React from 'react';
import { useDispatch } from 'react-redux';
import { orderBy_AZ } from '../../redux/actions/index';

export default function OrderAZ({paginaLocal}) {
    let dispatch = useDispatch();

    function onselectionchange(e) {
        e.preventDefault();
        paginaLocal(1);
        // console.log(e.target.value);
        dispatch(orderBy_AZ(e.target.value));
    };

    return(<div>
                <p><u>Order By: </u></p>
                <select 
                    name='select' onChange={onselectionchange}
                    style={{fontFamily: "Audiowide, sans-serif", letterSpacing: "1.1px"}} >
                    <option value='initial'>Alphabetical </option>
                    <option value='asc' >A - Z </option>
                    <option value='desc' >Z - A </option>
                </select>
            </div>
    )
};
