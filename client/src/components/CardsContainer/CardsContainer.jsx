import Card from "../Card/Card";
import css from "./CardsContainer.module.css"
import { useSelector } from "react-redux";
import { useState, useEffect} from "react";


const CardsContainer = () => {
    //estado local
    const [currentPage, setCurrentPage] = useState(1);
    //estado global
    const arrDogs = useSelector(state => state.filteredDogs);
    
    useEffect(() => {
        setCurrentPage(1); // Reiniciar currentPage a 1 cuando filteredDogs cambie
      }, [arrDogs]);

    //variables necesarias para el paginado
    const ITEMS_PER_PAGE = 8;
    const indexLastItem = currentPage * ITEMS_PER_PAGE;
    const indexFirstItem = indexLastItem - ITEMS_PER_PAGE;
    const totalPages = Math.ceil(arrDogs.length / ITEMS_PER_PAGE);
  
    //items que va a ir mosrando el contenedor de cards
    const currentItems = arrDogs.slice(indexFirstItem, indexLastItem);

    const handlePrevious = () => {
        (currentPage > 1) && setCurrentPage(currentPage - 1)
    };
    const handleNext = () => {
        (currentPage < totalPages) && setCurrentPage(currentPage + 1)
    };

    return (
        <div >
            <div className={css.container} >
            {currentItems.map(dog => {
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
            <div className={css.contPaged}>
                <label className={css.labelPage}>Page: {currentPage}</label>
                <button className={css.buttons} onClick={handlePrevious}>PREVIOUS</button>
                <button className={css.buttons} onClick={handleNext}>NEXT</button>
            </div>
        </div>
    )
};

export default CardsContainer;