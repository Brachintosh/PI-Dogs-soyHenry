// Importar las acciones que van a ser utilizadas:
import { GET_DOGS } from'../actions/index';

const initialState = {
    detalles: [],
    filtered: [],       // BACKUP QUE MANTENGO LOS DATOS QUE RECIBE DEL BACK-END
    perros: [],      // ARREGLO DE PERROS QUE VAN A SER RENDERIZADOS.
    temperamentos: [],
}

// ACTION >>> TYPE && PAYLOAD.

export default function rootReducer(state = initialState, action) {
    switch(action.type) {

        case GET_DOGS:
            return {
                ...state,
                perros: action.payload,
                todos: action.payload,      // Mantengo a los pjs de la forma que vienen del back-end
            }

        default:
            return {
                state
            }
    }
}