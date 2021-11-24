import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPS = "GET_TEMPS";
export const GET_ONE_DOG = "GET_ONE_DOG";

const URL_GET = "http://localhost:3001/api/dogs/get";
const URL_TEMPERAMENT = "http://localhost:3001/api/temperament/get";

//! Definimos las funciones que van a despachar o recibir acciones:

//Obtener todos los perros:
export function obtainDogs() {

    return async function(dispatch) {
        // Hacer el pedido a nuestro back-end:
        let request = await axios.get(URL_GET);
        // console.log(request);

        dispatch({
            type: GET_DOGS,
            payload: request.data,
        });
    };
};

// Obtener los Temperamentos:
export function obtainTemperament() {

    return async function(dispatch){
        let requestTemps = await axios.get(URL_TEMPERAMENT);
        // console.log(requestTemps);

        dispatch({
            type: GET_TEMPS,
            payload: requestTemps.data,
        });
    };
};

// Buscar un perro por su ID:
export default function obtainOneDog(id) {

    // console.log(id);

    return function(dispatch) {
        dispatch({
            type: GET_ONE_DOG,
            payload: id,
        })
    }
    
};
