import { GET_DOGS, GET_DOG_BY_ID, CLEAN_DETAIL, GET_TEMPERAMENTS, GET_DOGS_BY_NAME} from "./actions-type";
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

export const clean_detail = () => {
    return ({ type: CLEAN_DETAIL, payload: {} })
};

export const get_temperaments = () => {
    const endpoint = `http://localhost:3001/temperaments`
    return async (dispatch) => {
        const temperaments = (await axios.get(endpoint)).data
        return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments })
    };
};


export const get_dogs_by_name=(name)=>{  
    try {
        
        const endpoint=`http://localhost:3001/dogs?name=${name}`
        return async (dispatch) =>{
            const dogs = (await axios.get(endpoint)).data
            return dispatch({type: GET_DOGS_BY_NAME, payload: dogs})
        };
    } catch (error) {
        console.log(error)
    }
    
};