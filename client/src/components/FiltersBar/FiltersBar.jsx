import css from "./FiltersBar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { order_dogs, get_temperaments, filter_origin, filter_temp } from "../../redux/actions";
import { useEffect } from "react";

const FiltersBar = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(get_temperaments())
    },[dispatch])
    
    const handleOrigin = (event) => {
        dispatch(filter_origin(event.target.value))
    };
    const handleFilterTemp=(event)=>{
        dispatch(filter_temp(event.target.value))
        console.log(event.target.value)
    };
    const handleOrder=(event)=>{
        dispatch(order_dogs(event.target.value))
    };
    
    const temperaments= useSelector(state=>state.temperaments);
    return (
        <div className={css.container}>
            <select className={css.select} onChange={handleOrigin}>
                <option value="AllDogs">All dogs</option>
                <option value="ApiDogs">API dogs</option>
                <option value="DbDogs">DB dogs</option>
            </select>
            <select className={css.select} onChange={handleFilterTemp}>
            <option value="">Temperaments</option>       
                {temperaments.map((temp, index)=>(
                    <option key={index} value={temp}>
                        {temp}
                    </option>
                ))}
            </select>
            <select className={css.select} onChange={handleOrder}>
                <option value="OrderA">Order Asc. A-Z</option>
                <option value="OrderD">Order Desc. Z-A</option>
                <option value="OrderByWeightA">Order by Weight A</option>
                <option value="OrderByWeightD">Order by Weight D</option>
            </select>
            
        </div>
    )
}

export default FiltersBar