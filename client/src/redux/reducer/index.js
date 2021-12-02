// Importar las acciones que van a ser utilizadas:
import { GET_DOGS, GET_TEMPS, GET_BY_QUERY, GET_DOG_DETAILS, FILTER_TEMPS,
FILTER_BREED, ORDER_AZ/* ORDER_WEIGHT, ORDER_HEIGHT*/} from'../actions/index';

// ACTION >>> TYPE && PAYLOAD.
let initialState = {
    todos: [],      // Mantengo a los pjs de la forma que vienen del back-end.
    perros: [], // ARREGLO DE PJS que renderizamos.
    details: {},
    temperamentos: [],

}

export default function rootReducer(state = initialState, action) {
    

    switch(action.type) {

        case GET_DOGS:
            return {
                ...state,
                perros: action.payload,    // ARREGLO DE PERROS QUE VAN A SER RENDERIZADOS.
                todos: action.payload      // BACKUP QUE MANTENGO LOS DATOS QUE RECIBE DEL BACK-END.
            };

        case GET_TEMPS:
            return {
                ...state,
                temperamentos: action.payload,
            };

        case GET_DOG_DETAILS:
            return {
                ...state,
                details: action.payload,
            };

        case GET_BY_QUERY:
            return {
                ...state,
                perros: action.payload,
            };
            
        // revisar...
        // case FILTER_TEMPS:
        //     // const allTemps = state.temperamentos;
        //     const statusFiltered = action.payload === 'Temperamentos' ? state.filtrados : state.filtrados?.filter(e => e.temperamentos?.includes(action.payload));

        //     return {
        //         ...state,
        //         perros: statusFiltered,
        //     };

        case FILTER_BREED:
            const createdFilter = action.payload === 'createdInDb' ? state.todos.filter(e => e.createdInDb) : state.todos.filter(e => !e.createdInDb)
            return{
              ...state,
              perros: action.payload === 'All' ? state.todos : createdFilter 
             }

        // case ORDER_WEIGHT:
        //     return {

        //     };

        // case ORDER_HEIGHT:
        //     return{

        //     };

        case ORDER_AZ:
            return{
            ...state,
            perros: state.perros.sort((a,b) => {
                if(a.name < b.name) {
                    return -1;
                }
                if(b.name < a.name) {
                    return 1;
                }
                return 0;
            })
        };

        default: return state;
    };
};