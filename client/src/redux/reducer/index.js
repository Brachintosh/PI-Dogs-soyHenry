// Importar las acciones que van a ser utilizadas:
import { GET_DOGS, GET_TEMPS, GET_BY_QUERY, GET_DOG_DETAILS, /*FILTER_TEMPS,
FILTER_BREED, ORDER_WEIGHT, ORDER_HEIGHT, ORDER_AZ */} from'../actions/index';

const initialState = {
    detalles: [],
    filtrados: [],       // BACKUP QUE MANTENGO LOS DATOS QUE RECIBE DEL BACK-END
    perros: [],          // ARREGLO DE PERROS QUE VAN A SER RENDERIZADOS.
    temperamentos: [],
}

// ACTION >>> TYPE && PAYLOAD.

export default function rootReducer(state = initialState, action) {
    
    switch(action.type) {

        case GET_DOGS:
            return {
                ...state,
                perros: action.payload,
                todos: action.payload,      // Mantengo a los perritos de la forma que vienen del back-end.
            };

        // case ADD_DOG:
        //     return {
        //         ...state,
        //     };

        case GET_TEMPS:
            return {
                ...state,
                temperamentos: action.payload,
            };

        case GET_DOG_DETAILS:
            return {
                ...state,
                detlles: action.payload,
            };

        case GET_BY_QUERY:
            return {
                ...state,
                perros: action.payload,
            };

        // case FILTER_TEMPS:
        //     return {

        //     };

        // case FILTER_BREED:
        //     return {

        //     };

        // case ORDER_WEIGHT:
        //     return {

        //     };

        // case ORDER_HEIGHT:
        //     return{

        //     };

        // case ORDER_AZ:
        //     return{

        //     };

        default:
            return {
                state
            }
    };
};