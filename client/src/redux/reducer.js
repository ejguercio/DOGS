//import arrDogs from "../utils/arrDogs";
import { filter_dogs } from "./actions";
import { CLEAN_DETAIL, GET_DOGS, GET_DOGS_BY_NAME, GET_DOG_BY_ID, GET_TEMPERAMENTS, FILTER_DOGS, ORDER_DOGS } from "./actions-type";

const initialState = {
    dogs: [],
    filteredDogs: [],
    dog: {},
    temperaments: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: payload,
                filteredDogs: payload
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
                filteredDogs: payload
            }
        case FILTER_DOGS:
            let filtered = (payload === "AllDogs") ? state.dogs //TODOS
                            : (payload === "DbDogs")? state.dogs.filter(dog => dog.created === true) //DB DOGS
                            : state.dogs.filter(dog => dog.created === false); //API DOGS
            return {
                ...state,
                filteredDogs: filtered
            }
        case ORDER_DOGS:
            const filteredCopy=[state.filteredDogs]
            // if (payload==="OrderAsc"){
            //     let ordered= 
                  
            // }
            return {
                ...state,
                filteredDogs: (payload==="OrderAsc")? filteredCopy.sort((a, b) => a.name - b.name)
                                :filteredCopy.sort((a, b) => b.name - a.name)
            }

        default:
            return { ...state };
    }

};

export default reducer;