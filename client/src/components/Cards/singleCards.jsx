import React from "react";
import './SingleCard.css';

// Por props recibe nombre, imagen y demas...
export default function SingleCard({ id, name, image, temperament, minWeight, maxWeight }) {
    return (
        <div key={id}>
            <div className='single-card' ><br/>
                <h2>{name}</h2>
                <h4>{!Array.isArray(temperament) ? temperament :  temperament.map(e => e).join(', ')}</h4> 
                <h5>Peso Mínimo: {minWeight}</h5>
                <h5>Peso Máximo: {maxWeight}</h5>
            </div><br/>
            <img src={image} alt="Imagen not found !" widht="200px" height="250px" /><br/>
        </div>
    );
}