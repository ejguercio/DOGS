import css from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { get_dogs_by_name } from "../../redux/actions";

const SearchBar = () => {
    const [name, setName] = useState("")
    const dispatch= useDispatch()

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const searchByName=()=>{
        dispatch(get_dogs_by_name(name))
    };
    

    return (
        <div className={css.container}>
            <input className={css.input} placeholder="Search by name" value={name} onChange={handleChange}></input>
            <button className={css.button} onClick={() => { searchByName(name); setName("") }} >SEARCH</button>
        </div>
    )
};

export default SearchBar;