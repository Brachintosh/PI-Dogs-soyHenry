import React from "react";
import { useState } from "react";
import  { useDispatch } from "react-redux"
import  { getByQueryName }from "../../redux/actions/index";
import './search.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

function handleInputChanges(e){
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
};

function handleSubmit(e){
    e.preventDefault();
    dispatch(getByQueryName(name));
};
    return(
        <div>
            <input  
                className='input-form'
                type="text"
                placeholder="Search name..."
                onChange = {(e) => handleInputChanges(e)}
            />
            <button className='btn' type="submit" onClick = {(e) => handleSubmit(e)}
                >SEARCH</button>
        </div>

    )

};