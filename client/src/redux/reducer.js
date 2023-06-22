import { CLEAN_DETAIL, GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, FILTER_ORIGIN, ORDER_DOGS, FILTER_TEMPERAMENT } from "./actions-type";

const initialState = {
    allDogs: [],
    dogsByName: [],
    dogsToRender: [], //el que renderiza siempre el componente
    dog: {},
    temperaments: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DOGS:
            return {
                ...state,
                allDogs: payload,
                dogsToRender: payload,
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dog: payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                dog: payload
            }
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogsByName: payload,
                dogsToRender: payload
            }
        case FILTER_ORIGIN:
            let byOrigin = [];

            if (payload === "AllDogs") {
                byOrigin = state.allDogs; //ALL DOGS
                state.dogsByName = [];
            } else { //si hay una busqueda por nombre filtro sobre la misma sino filtro sobre allDogs
                const dogsToFilter = state.dogsByName.length !== 0 ? state.dogsByName : state.allDogs; 
                
                byOrigin = (payload === "DbDogs") ? dogsToFilter.filter(dog => dog.created) //DB DOGS
                                                : dogsToFilter.filter(dog => !dog.created); //API DOGS
            }
            return {
                ...state,
                dogsToRender: byOrigin
            };
        case FILTER_TEMPERAMENT:
            let byTemp=[];    
            for (const dog of state.dogsToRender){
                if(dog.temperament!==undefined){
                    (dog.temperament.includes(payload))&& byTemp.push(dog)
                }
            }
        return{
            ...state,
            dogsToRender: byTemp
        }
        case ORDER_DOGS:
            let ordered = [...state.dogsToRender]
            //trabajo con esa copia porque si uso el estado directo, el useEffect no me renderizaba los cambios en tiempo real
            ordered = (payload === "OrderA") ? ordered.sort((a, b) => a.name.localeCompare(b.name)) //ALFA ASCENDENTE
                    : (payload === "OrderD") ? ordered.sort((a, b) => b.name.localeCompare(a.name)) //ALFA DESCENDENTE
                    : (payload === "OrderByWeightA") ? ordered.sort((a, b) => a.maxWeight - b.maxWeight) //PESO ASCENDETE
                    : ordered.sort((a, b) => b.maxWeight - a.maxWeight)  //PESO DESCENDENTE
            return {
                ...state,
                dogsToRender: ordered
            };

        default:
            return { ...state };
    }

};

export default reducer;
