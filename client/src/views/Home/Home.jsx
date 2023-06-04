import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { get_dogs } from "../../redux/actions";
import { useSelector } from "react-redux";
let dogsFetched=false;
const Home= ()=>{
    const dispatch= useDispatch();
    
    useEffect(()=>{
        if (dogsFetched===false){
            dispatch(get_dogs())
            dogsFetched=true
        }
    },[])
    
    return(
        <>
            <h1>Vista HOME</h1>
            <CardsContainer/>
        </>
    )
};

export default Home;