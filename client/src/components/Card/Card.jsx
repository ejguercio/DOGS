import css from "./Card.module.css"
import { NavLink } from "react-router-dom";

const Card = ({ id, image, name, temperament, weight }) => {

    return (
        <NavLink className={css.link} to={`/detail/${id}`}> 
            <div className={css.container}>
                <h2 className={css.info}>{name}</h2>
                <h2 className={css.info}>{weight}</h2>
                <h2 className={css.info}>{temperament}</h2>
                <img className={css.image} src={image} alt=""></img>
            </div>
        </NavLink>
    )
};

export default Card;
