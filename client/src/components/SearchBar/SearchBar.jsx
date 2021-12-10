import React from "react";
import { useState } from "react";
import  { useDispatch } from "react-redux"
import  { getByQueryName }from "../../redux/actions/index";
import './search.css';

export default function SearchBar({paginaLocal}) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

function handleInputChanges(e){
    e.preventDefault();
    setName(e.target.value);
};

function handleSubmit(e){
    e.preventDefault();

    if(name){
        dispatch(getByQueryName(name));
        setName('');
    }

    paginaLocal(1);
};
// console.log("soy name: ", name);
    return <div>
        {
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
                    className='btn' type="submit" onClick = {handleSubmit}>
                    SEARCH
                </button>    
            </form>
        }
        
        </div>
};