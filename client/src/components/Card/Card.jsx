import css from "./Card.module.css"

const Card = ({ image, name, temperament, weight }) => {

    return (
        <div className={css.container}>
            <h2 className={css.info}>{name}</h2>
            <h2 className={css.info}>{temperament}</h2>
            <h2 className={css.info}>{weight}</h2>
            <img className={css.image} src={image} alt=""></img>
        </div>
    )
};

export default Card;