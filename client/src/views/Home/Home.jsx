import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_dogs } from "../../redux/actions";

const Home= ()=>{
    const dispatch= useDispatch();
    
    useEffect(()=>{
        dispatch(get_dogs())
    },[dispatch])

    return(
        <>
            <h1>Vista HOME</h1>
            <CardsContainer/>
        </>
    )
};

export default Home;