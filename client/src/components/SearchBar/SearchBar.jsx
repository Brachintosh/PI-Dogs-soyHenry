import React from "react";
import { useState } from "react";
import  { useDispatch } from "react-redux"
import  { getByQueryName }from "../../redux/actions/index";
import './search.css';

export default function SearchBar({paginaLocal}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const [errors, setErrors] = useState({});

function handleInputChanges(e){
    e.preventDefault();

    // setErrors(validation({
    //     ...name,
    //     [e.target.name]: e.target.value
    // }));

    setName(e.target.value);
};

//!! NO FUNCIONA COMO DEBERIA... :(
// validar solo letras, minimo 1 - maximo 25
// /^[A-Za-z_-]{1,25}$/

// function validation(name){
//     // var validQName = /^[A-Za-z_]{1,25}$/.test(name);
//     let errors = {};

//     if (!name) {
//     errors.name='No name.'
//     } else if(!/^[A-Za-z_]{2,25}$/.test(name)) {
//         errors.name = 'Not a valid name...'
//     }
//     return errors;
// };

function handleSubmit(e){
    e.preventDefault();
    // validation(!name);
    

    if(name){
        dispatch(getByQueryName(name));
        setName('');
    }

    paginaLocal(1);
};

console.log("soy name: ", name);

    return(
        <form> 
                <input  
                    className='input-search'
                    pattern="[a-zA-Z ]{2,254}"
                    value={name} // sin value no se actualiza el setName !!
                    type="text"
                    placeholder="Search breed name..."
                    onChange = {handleInputChanges}
                /> 
                
                <button
                    className='btn' type="submit" onClick = {handleSubmit}
                    >SEARCH</button>    
                
                {/* {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )} */}
        </form>
    );
};