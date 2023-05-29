import Card from "../Card/Card";
import css from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {
    const arrDogs= useSelector(state=>state.dogs)//prueba provisoria

    return (
        <div className={css.container}>
            {arrDogs.map(dog => {
                return <Card
                    key={dog.id}// para uso interno de React, no la veremos
                    id={dog.id}
                    name={dog.name}
                    temperament={dog.temperament}
                    weight={dog.weight}
                    image={dog.image}
                />
            })}
        </div>
    )
};

export default CardsContainer;