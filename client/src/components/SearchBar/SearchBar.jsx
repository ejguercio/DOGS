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
        const reLetters = /^[a-zA-Z]{2,18}$/; //entre 2 y 18 caracteres solo letras

        (reLetters.test(name)===true)? dispatch(get_dogs_by_name(name))
                                      : alert("formato de busqueda incorrecto")  
    };
    

    return (
        <div className={css.container}>
            <input className={css.input} placeholder="Search by name" maxLength={20} value={name} onChange={handleChange}></input>
            <button className={css.button} onClick={() => { searchByName(name); setName("") }} >SEARCH</button>
        </div>
    )
};

export default SearchBar;