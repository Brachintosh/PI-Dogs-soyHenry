import React from "react";
import { useState } from "react";
import  { useDispatch } from "react-redux"
import  { getByQueryName }from "../../redux/actions/index";
import './search.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});

function handleInputChanges(e){
    e.preventDefault();

    setErrors(validation({
        ...name,
        [e.target.name] : e.target.value
    }));

    setName(e.target.value);
};
//!! NO FUNCIONA COMO
function validation(name){
    let errors = {};
    if(!name.name) {
        errors.name = "Must search a valid name."
    }
    return errors;
};

function handleSubmit(e){
    e.preventDefault();
    validation(name);
    dispatch(getByQueryName(name));
    setName('');
};
    return(
        <form> 
                <input  
                    className='input-search'
                    value={name} // sin value no se actualiza el setName !!
                    type="text"
                    placeholder="Search breed name..."
                    onChange = {handleInputChanges}
                /> 
                {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                
                <button
                className='btn' type="submit" onClick = {handleSubmit}
                   >SEARCH</button>    
        </form>
    )

};