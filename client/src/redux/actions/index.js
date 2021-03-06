import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPS = "GET_TEMPS";
export const GET_BY_QUERY = "GET_BY_QUERY";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const FILTER_TEMPS = "FILTER_TEMPS";
export const FILTER_BREED = "FILTER_BREED";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_WEIGHT = "ORDER_WEIGHT";
// export const ORDER_HEIGHT = "ORDER_HEIGHT";

const URL_GET = "/api/dogs";
const URL_GET_QUERY = "/api/dogs?name=";
const URL_POST = "/api/dogs/create";
const URL_TEMPERAMENT = "/api/temperaments";


//! Definimos las funciones que van a despachar o recibir acciones:

//Obtener todos los perros:
export function obtainDogs() {

    return async function(dispatch) {
        // Hacer el pedido a nuestro back-end:
        const requestDogs = await axios.get(URL_GET);
        dispatch({
            type: GET_DOGS,
            payload: requestDogs.data,
        });
        // console.log(requestDogs.data);
    };
};

// Crear un perro nuevo:
export function createDog(payload) {
    return async function(dispatch) {
        const created_Dog = await axios.post(URL_POST, payload);
        // console.log(created_Dog); // Para ver lo que genera...
        return created_Dog;
    };
};

// Obtener los Temperamentos:
export function obtainTemperament() {

    return async function(dispatch){
        const requestTemps = await axios.get(URL_TEMPERAMENT);
        dispatch({
            type: GET_TEMPS,
            payload: requestTemps.data,
        });
    };
};

// Buscar a un perro por QueryName:
export function getByQueryName(name) {
    return async function (dispatch) {
        try {
            const queryName = await axios.get(URL_GET_QUERY + name);
            dispatch({
                type: GET_BY_QUERY,
                payload: queryName.data,
            });
        } catch (error) {
            alert(
                <p>No valid name...</p>
            );
        };
    };
};

// Buscar un perro por su ID:
export function getDogDetails (id){
    return async function (dispatch){
        try {
            const infoDetails = await axios.get(`/api/dogs/${id}`);
            const llamado = await infoDetails.data;
    
            return dispatch({
                type: GET_DOG_DETAILS,
                payload: llamado
                
            })
            // console.log("SOY INFO DE AXIOS", llamado)
        } catch (error) {
            console.log(error);
        }
    }
};

// Filtrar por Temperamentos:
export function filterByTemps(temp) {
    return {
        type: FILTER_TEMPS,
        payload: temp,
    }
};

// Filtrar por Nombre_RazaDB: >> Me trae los creados a trav??s del form.
export function filterByBreeds(payload) {
    return {
        type: FILTER_BREED,
        payload
    };
};

// Orden por Peso:
export function orderBy_Weight(value) {
    return{
        type: ORDER_WEIGHT,
        payload: value,
    };
};

// Orden por A_Z:
export function orderBy_AZ(value) {
    return{
        type: ORDER_AZ,
        payload: value,
    }
};

// OPCIONAL:
// Orden por Altura:
// export function orderBy_Height(value) {
//     return{
//         type: ORDER_HEIGHT,
//         payload: value,
//     };
// };
