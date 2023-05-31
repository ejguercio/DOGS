import { GET_DOGS, GET_DOG_BY_ID, CLEAN_DETAIL } from "./actions-type";
import axios from "axios";

export const get_dogs = () => {

    const endpoint = 'http://localhost:3001/dogs';
    return async (dispatch) => {
        const dogs = (await axios.get(endpoint)).data
        return dispatch({ type: GET_DOGS, payload: dogs });
    };


};

export const get_dog_by_id = (id) => {

    const endpoint = `http://localhost:3001/dogs/${id}`
    return async (dispatch) => {
        const [dog] = (await axios.get(endpoint)).data //hago destructuring por el dog viene en un arr desde el back
        return dispatch({ type: GET_DOG_BY_ID, payload: dog }) //este dog es un obj
    }
};

export const clean_detail=()=>{
    return ({type: CLEAN_DETAIL, payload: {}})
};