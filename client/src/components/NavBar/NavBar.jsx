import FiltersBar from "../FiltersBar/FiltersBar";
import SearchBar from "../SearchBar/SearchBar";
import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className={css.container}>
            <NavLink className={css.links} to="/home">HOME</NavLink>
            <FiltersBar/>
            <SearchBar/>
            <NavLink className={css.links} to="form">CREATE DOG</NavLink>
        </div>
    )
};

export default NavBar;
