//import arrDogs from "../utils/arrDogs";
import { CLEAN_DETAIL, GET_DOGS, GET_DOG_BY_ID } from "./actions-type";

const initialState = {
    dogs: [],
    dog:{}
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

        
        default:
            return { ...state };
    }

};

export default reducer;