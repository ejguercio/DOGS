//import arrDogs from "../utils/arrDogs";

import { CLEAN_DETAIL, GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, FILTER_DOGS, ORDER_DOGS } from "./actions-type";

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
        case FILTER_DOGS:
            let filtered = [];

            if (payload === "AllDogs") {
                filtered = state.allDogs; //ALL DOGS
                state.dogsByName = [];
            } else { //si hay una busqueda por nombre la signo sino filtro all
                const dogsToFilter = state.dogsByName.length !== 0 ? state.dogsByName : state.allDogs; 
                filtered = (payload === "DbDogs") ? dogsToFilter.filter(dog => dog.created) //DB DOGS
                                                : dogsToFilter.filter(dog => !dog.created); //API DOGS
            }
            return {
                ...state,
                dogsToRender: filtered
            };
        case ORDER_DOGS:
            let ordered = [...state.dogsToRender]
            //trabajo con esa copia porque si uso el estado directo, el useEffect no me renderizaba los cambios en tiempo real
            ordered = (payload === "OrderA") ? ordered.sort((a, b) => a.name.localeCompare(b.name))
                : (payload === "OrderD") ? ordered.sort((a, b) => b.name.localeCompare(a.name))
                    : (payload === "OrderByWeightA") ? ordered.sort((a, b) => a.maxWeight - b.maxWeight)
                        : ordered.sort((a, b) => b.maxWeight - a.maxWeight)
            return {
                ...state,
                dogsToRender: ordered
            };

        default:
            return { ...state };
    }

};

export default reducer;