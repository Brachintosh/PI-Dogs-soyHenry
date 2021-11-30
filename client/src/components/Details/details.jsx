import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetails, obtainTemperament } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import './detalle.css';

export default function Details(props){
   
    const dispatch = useDispatch();
    const details = useSelector((state) => state.details);
    console.log('DETALLE', details)
    useEffect(() => {
        dispatch(getDogDetails(props.match.params.id))  
    }, [props.match.params.id, dispatch])

    return (
        <div className='contenedorAll'>
            <h1 className='h1details'>Detalle</h1>
            <hr/>
            {
                details ?
                
                <div>
                    <div className='contenedorDetails'>
                        <div>
                            <img className='imgDetails' src={details.image? details.image : details[0].image} alt='not found' width='400px' height='400px'/>
                        </div>
                        
                        <div className='todoDetails'>
                            <h1 className='tituloDetails'>{details.name? details.name : details[0].name}</h1>
                            <div className='pesoAltura'>
                                <div className='detalle'>
                                    <h4> Peso </h4>
                                    { details.weight?
                                    <p>{details.weight} kilos</p>
                                    :<p>{details[0].weight_min} - {details[0].weight_max} kilos</p>
                                    }
                                
                                </div>   
                                <div className='detalle'>
                                    <h4> Altura </h4>
                                    { details.height?
                                    <p>{details.height} cm</p>
                                    :<p>{details[0].height_min} - {details[0].height_max} cm</p>
                                    }
                                    
                                </div>
                            </div> 
                            <div className="vidaOrigen">
                                <div className='detalle'>
                                    <h4> Años de vida </h4>
                                    <p>{details.life_span? details.life_span : details[0].life_span}</p>
                                </div> 
                                <div className='detalle'>
                                    <h4> Origen </h4>
                                    <p>{details.origin? details.origin : details[0]?.origin}</p>
                                </div> 
                            </div>
                            <div className='detalle'>
                                <h4> Temperamento/s </h4>
                                <p>{!details[0]?.createdInDb? details.temperament :  details[0].temperaments?.map(e => e.name).join(', ')}</p>
                            </div> 
                        </div>
                    </div>
                    <Link to='/home' className='link'>
                         <button className='botonDetails'>volver</button>
                    </Link>
                </div>
                :
                <div>Loading...</div>
            }
        </div>
    )
}

// export default function Details() {
    
//     const dispatch = useDispatch();

//     const redux = useSelector(state => state.detalles)
//     console.log(redux.detalles); // => {vacio}

//     // const detallePerro = useSelector((state) => state.detalles)
//     // console.log("soy contenido de Detalles: ", detallePerro);
//     let {id}  = useParams();
//     // console.log(id)

//     useEffect(() => {
//         // Llamo a la function usando el id de cada pj.
//         dispatch(getDogDetails(id));
//     }, [dispatch, id]);


//     return (
//         <div >
            
//                 detalles ?
            
//             <div>
//                 <h3> Breed Details: </h3> <br/>
//                 <div>
//                     {/* <img src={redux.image? redux.image : redux[0].image} alt="Imagen de un perro" style={{width='400px', height='400px'}}/><br/><br/> */}
//                 </div>
//                 <h3>Especie:{redux.name? redux : redux[0].name}</h3><br/>
//                 {/* <h4>{!Array.isArray(temperament) ? temperament :  temperament.map(e => e).join(', ')}</h4>  */}
//                 <h4>Peso Mínimo:{redux.minWeight}</h4><br/>
//                 <h4>Origin:{redux.origin}</h4><br/>
//                 <h4>Created: {redux.created}</h4>  se va a usar esto ?
//             </div>
//             <Link to='/home' style={{textDecoration: "none", border: "1px solid #000000", color:"black",
//                 padding: "3px 7px", fontWeight:"550", borderRadius:"8px", backgroundColor:"rgb(552,200,50)"}}>GO BACK</Link>
//         </div>
//     )

// };