import React from "react";
import "./Paginado.css"

export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumbers=[]
    for(let i=0; i<=Math.floor(allDogs/dogsPerPage);i++){
        pageNumbers.push(i+1)
    }
    return (
        <div>
          <div className= "div-paginado">
            {pageNumbers && pageNumbers.map(number => (
              <div className= "btn-pag" >
                <button className= "boton-paginado" onClick={() => paginado(number)}>
                  {number}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};
