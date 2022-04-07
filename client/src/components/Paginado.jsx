import React from "react";
import "./Paginado/Paginado.css"

export default function Paginado({dogsPerPage, allDogs, paginado, value}){
    const pageNumbers=[]
    for(let i=0; i<=Math.floor(allDogs/dogsPerPage);i++){
        pageNumbers.push(i+1)
    }
    return (
        <div>
          <div className= "div-paginado">
            {pageNumbers && pageNumbers.map(number => (
              <div className= "btn-pag" key={number.toString()} >
                <button 
                    className= {number === value? 'actual' : 'boton-paginado'} 
                    onClick={() => paginado(number)}>
                  {number}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};
