import css from "./NavBar.module.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className={css.container}>
            <NavLink className={css.links} to="/">ABOUT</NavLink>
            <NavLink className={css.links} to="/home">HOME</NavLink>
            <NavLink className={css.links} to="form">CREATE DOG</NavLink>
        </div>
    )
};

export default NavBar;