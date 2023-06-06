import css from "./FiltersBar.module.css"
import { useDispatch } from "react-redux";
import { filter_dogs, order_dogs } from "../../redux/actions";

const FiltersBar = () => {
    const dispatch = useDispatch();

    const handleFilter = (event) => {
        dispatch(filter_dogs(event.target.value))
    };
    const handleOrder=(event)=>{
        dispatch(order_dogs(event.target.value))
    };

    return (
        <div className={css.container}>
            <select className={css.select} onChange={handleFilter}>
                <option value="AllDogs">All dogs</option>
                <option value="ApiDogs">API dogs</option>
                <option value="DbDogs">DB dogs</option>
            </select>
            <select className={css.select} onChange={handleOrder}>
                <option value="OrderA">Order Asc.</option>
                <option value="OrderD">Order Desc.</option>
                <option value="OrderByWeight">Order by Weight</option>
            </select>
        </div>
    )
}

export default FiltersBar