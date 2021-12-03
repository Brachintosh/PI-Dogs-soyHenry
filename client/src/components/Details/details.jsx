import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetails, obtainTemperament } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import './detalle.css';

export default function Details(props){
   
    const dispatch = useDispatch();
    const details = useSelector((state) => state.todos);
    console.log('DETALLE', details)
    
    useEffect(() => {
        dispatch(getDogDetails(props.match.params.id))  
    }, [props.match.params.id, dispatch])

    return (
        <div className='contenedorAll'><br />
            <h1 className='h1details'><u>Dog Details:</u></h1><br />
            <hr/><br/>

            {
                details ?
                
                <div>
                    <div className='container-details'>

                        <div>
                            <h2>{details.name? details.name : details[0].name}</h2><br />
                        </div>

                        <div>
                            <img className='imgDetails' src={details.image? details.image : details[0].image} alt='not found' width='400px' height='400px'/>
                        </div><br />
                        
                        <div>
                            <div>
                                <h4> Weight: </h4>
                                <p>{details.height? details.height : details[0].height} kgs.</p><br />
                            </div>   

                            <div>
                                <h4> Height: </h4>
                                <p>{details.weight? details.weight : details[0].weight} "</p><br />
                            </div>

                            <div>
                                <h4> Life-Span: </h4>
                                <p>{details.life_span? details.life_span : details[0].life_span}.</p><br />
                            </div> 

                                {/* <div>
                                    <h4> Origen </h4>
                                    <p>{details.origin? details.origin : details[0]?.origin}</p>
                                </div>  */}

                            <div>
                                <h4> Temperament's: </h4>
                                <p>{details.temperament? details.temperament: details.Temperaments }</p><br />
                                {/* {el.temperament? el.temperament: el.Temperaments }  >> tampoco...
                                    NO LEE LOS TEMPERAMENTS
                                    {!details[0]?.temperament? details.temperament :  details[0].Temperaments?.map(e => e.name).join(', ')}
                                    RENDERIZA SOLO EL 1er PERRO de la API
                                */}
                            </div> 

                        </div>
                    </div><br/>

                    <Link to='/home'>
                         <button> Go Home </button><br/>
                    </Link>

                </div>

                :

                <div>Loading...</div>
            }
        </div>
    );
};