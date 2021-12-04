import React from "react";
import './SingleCard.css';

// Por props recibe nombre, imagen y demas...
export default function SingleCard({ id, name, image, temperament, weight, height, life_span,/*origin*/ }) {
    return (
        <div key={id}>
            <div className='single-card' ><br/>
                <h2>{name}</h2><br/>
                <h4>{!Array.isArray(temperament) ? temperament :  temperament.map(e => e.name).join(', ')}</h4><br/>
                <h5>Life-Span: {life_span}</h5>
                {/* <h5>Origin: {origin}</h5> */}
                <h5>Weight: {weight} kgs</h5>
                <h5>Height: {height}"</h5><br/>
                <img className='dog-img' src={image} alt="Image not found !" widht="190px" height="230px" /><br/>
            </div><br/>
        </div>
    );
}