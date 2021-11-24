import React from "react";
// Por props recibe nombre, imagen y demas...
export default function SingleCard({id, name, image, origin}) {
    return (
        <div key= {id}>
            <div>
                <h2>{name}</h2>
                <h4>{origin}</h4>
            </div>
            <img src={image} alt="Imagen de un perrito"/>
        </div>
    )
}