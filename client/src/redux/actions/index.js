import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPS = "GET_TEMPS";
export const GET_BY_QUERY = "GET_BY_QUERY";
export const GET_DOG_DETAILS = "GET_DOG_DETAILS";
export const FILTER_TEMPS = "FILTER_TEMPS";
export const FILTER_BREED = "FILTER_BREED";
export const ORDER_WEIGHT = "ORDER_WEIGHT";
export const ORDER_HEIGHT = "ORDER_HEIGHT";
export const ORDER_AZ = "ORDER_AZ";

const URL_GET = "http://localhost:3001/api/dogs/get/";
const URL_GET_QUERY = "http://localhost:3001/api/dogs/get?name=";
const URL_POST = "http://localhost:3001/api/dog/";
const URL_TEMPERAMENT = "http://localhost:3001/api/temperament/get/";


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
    };
};

// Crear un perro nuevo:
export function createDog(payload) {
    return async function(dispatch) {
        const created_Dog = await axios.post(URL_POST, payload);
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
        const queryName = await axios.get(URL_GET_QUERY + name);
        dispatch({
            type: GET_BY_QUERY,
            payload: queryName.data,
        });
    };
};

// Buscar un perro por su ID:
export function obtainOneDog(id) {
    return async function(dispatch) {
        const infoDog = await axios.get(URL_GET + id);

        dispatch({
            type: GET_DOG_DETAILS,
            payload: infoDog.data,
        });
    };
};

// Filtrar por Temperamentos:
export function filterByTemps(temp) {
    return {
        type: FILTER_TEMPS,
        payload: temp,
    }
};

// Filtrar por Nombre_Raza:
export function filterByBreeds(value) {
    return {
        type: FILTER_BREED,
        payload: value,
    };
};

// Orden por Altura:
export function orderBy_Weight(value) {
    return{
        type: ORDER_WEIGHT,
        payload: value,
    };
};

// Orden por Peso:
export function orderBy_Height(value) {
    return{
        type: ORDER_HEIGHT,
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