import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className={css.container}>
            <NavLink to="/">Landing</NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="detail">Detail</NavLink>
            <NavLink to="form">Create Dog</NavLink>
        </div>
    )
};

export default NavBar;