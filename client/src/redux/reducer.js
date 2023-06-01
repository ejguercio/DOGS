//import arrDogs from "../utils/arrDogs";
import { CLEAN_DETAIL, GET_DOGS, GET_DOG_BY_ID, GET_TEMPERAMENTS } from "./actions-type";

const initialState = {
    dogs: [],
    dog:{},
    temperaments: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: payload
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
            return{
                ...state,
                temperaments: payload
            }

        
        default:
            return { ...state };
    }

};

export default reducer;