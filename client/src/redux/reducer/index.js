// Importar las acciones que van a ser utilizadas:
import { GET_DOGS, GET_TEMPS, GET_BY_QUERY, GET_DOG_DETAILS, FILTER_TEMPS,
FILTER_BREED, ORDER_AZ, ORDER_WEIGHT/* , ORDER_HEIGHT*/} from'../actions/index';

// ACTION >>> TYPE && PAYLOAD.
let initialState = {
    todos: [],      // Mantengo a los pjs de la forma que vienen del back-end.
    perros: [], // ARREGLO DE PJS que renderizamos.
    details: [],
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

        case 'CREATE_DOG':
            return {
                ...state,
            };
            
        // revisar...
        case FILTER_TEMPS:
            const statusFiltered = action.payload === null ? state.perros 
            : state.perros.filter((e) => {
                if(e.temperament && e.temperament?.includes(action.payload)){
                    return e;} else {
                        return false;
                    }
            });
            return{
                ...state,
                perros: statusFiltered
            }

        case FILTER_BREED:
            const allBreeds = state.todos; // DB + API
            const createdFilter = action.payload === 'createdInDb' ? state.todos.filter(e => e.createdInDb) : state.todos.filter(e => !e.createdInDb)
            return{
              ...state,
              perros: action.payload === 'All' ? allBreeds : createdFilter 
             }

        case ORDER_WEIGHT:
            const ordenados = action.payload === 'min' ? 
    
            state.todos.sort(function(a,b){
              if(Number(a.weight.metric ? a.weight.metric.split('-')[0] 
              : a.weight.split('-')[0]) > Number(b.weight.metric ? b.weight.metric.split('-')[0] 
              : b.weight.split('-')[0])) return 1;
    
    
              if(Number(a.weight.metric ? a.weight.metric.split('-')[0] 
              : a.weight.split('-')[0]) <  Number(b.weight.metric ? b.weight.metric.split('-')[0] 
              : b.weight.split('-')[0])) return -1;
              return 0;
            })
            :
              state.todos.sort(function(a,b){
            if(Number(a.weight.metric ? a.weight.metric.split('-')[0] 
              : a.weight.split('-')[0]) < Number(b.weight.metric ? b.weight.metric.split('-')[0] 
              : b.weight.split('-')[0])) return 1;
    
    
              if(Number(a.weight.metric ? a.weight.metric.split('-')[0] 
              : a.weight.split('-')[0]) >  Number(b.weight.metric ? b.weight.metric.split('-')[0] 
              : b.weight.split('-')[0])) return -1;
              return 0;
                
            });

            return{
                ...state,
                perros: ordenados,
               }
    
        case ORDER_AZ:
            let orderedDogs = [...state.perros]
            
            let order =  orderedDogs.sort((a, b) => {
                if(a.name < b.name) {
                    return action.payload === 'asc' ? -1 : 1;
                }
                if(a.name > b.name) {
                    return action.payload === 'desc' ? -1 : 1;
                }
                return 0;
            })
            return {
                ...state,
                perros: order,
            };
            

        // case ORDER_HEIGHT:
        //     return{
        //     };

        default: return state;
        };
    };