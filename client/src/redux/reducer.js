import arrDogs from "../utils/arrDogs";

const initialState={
    dogs:arrDogs,
};

const reducer= (state=initialState, {type, payload})=>{

    switch (type) {
        //case value:
            
            //break;
    
        default:
            return {...state};
    }

};

export default reducer;