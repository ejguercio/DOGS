import Card from "../Card/Card";
import css from "./CardsContainer.module.css"
import { useSelector } from "react-redux";
//import { useState } from "react";

const CardsContainer = () => {
    const arrDogs = useSelector(state => state.dogs);
    const arrLimitadoPrueba = arrDogs.slice(0, 8);//limito porque aun no tengo paginado

    return (
        <div className={css.container}>
            {arrLimitadoPrueba.map(dog => {
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