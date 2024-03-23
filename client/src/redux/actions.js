import { GET_DOGS, GET_DOG_BY_ID, CLEAN_DETAIL, GET_TEMPERAMENTS, GET_DOGS_BY_NAME, FILTER_ORIGIN, FILTER_TEMPERAMENT, ORDER_DOGS } from "./actions-type";
import axios from "axios";
const URL_BASE = process.env.REACT_APP_SERVER

export const get_dogs = () => {

    return async (dispatch) => {
        const dogs = (await axios.get(`${URL_BASE}dogs`)).data
        return dispatch({ type: GET_DOGS, payload: dogs });
    };
};

export const get_dog_by_id = (id) => {

    return (dispatch) => {
        return axios.get(`${URL_BASE}dogs/${id}`)
            .then(response => {
                const [dog] = response.data // hago destructuring porque el dog viene en un arr desde el back    
                dispatch({ type: GET_DOG_BY_ID, payload: dog }) //este dog es un obj
            })
            .catch(error => {
                alert(`${error.message}`);
                alert(`${error.response.data.error}`); //llego al error del back dentro el objeto de axios
            });
    }
};

export const clean_detail = () => {
    return ({ type: CLEAN_DETAIL, payload: {} })
};

export const get_temperaments = () => {

    return async (dispatch) => {
        const temperaments = (await axios.get(`${URL_BASE}temperaments`)).data
        return dispatch({ type: GET_TEMPERAMENTS, payload: temperaments })
    };
};


export const get_dogs_by_name = (name) => {

    return (dispatch) => {
        return axios.get(`${URL_BASE}dogs?name=${name}`)
            .then(response => {
                const dogs = response.data;
                dispatch({ type: GET_DOGS_BY_NAME, payload: dogs });
            })
            .catch(error => {
                alert(`${error.message}`);
                alert(`${error.response.data.error}`); //llego al error del back dentro el objeto de axios
            });
    };
};

export const filter_origin = (origin) => {
    return (dispatch) => {
        return dispatch({ type: FILTER_ORIGIN, payload: origin })
    }
};

export const filter_temp = (temperament) => {
    return (dispatch) => {
        return dispatch({ type: FILTER_TEMPERAMENT, payload: temperament })
    }
};

export const order_dogs = (order) => {
    return (dispatch) => {
        return dispatch({ type: ORDER_DOGS, payload: order })
    }
};
