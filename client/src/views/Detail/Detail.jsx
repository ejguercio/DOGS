import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_dog_by_id, clean_detail } from "../../redux/actions";
import css from "./Detail.module.css";


const Detail = () => {
    const { detailId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clean_detail())
        dispatch(get_dog_by_id(detailId))
    }, [dispatch, detailId])

    const dog = useSelector(state => state.dog);

    return (
        <div className={css.container}>
            <div className={css.containerInfo}>
                <h1 className={css.info}>DETAILS</h1>
                <h2 className={css.info}>BREED NAME: {dog.name}</h2>
                <h2 className={css.info}>HEIGHT: {dog.height}</h2>
                <h2 className={css.info}>WEIGHT: {dog.weight}</h2>
                <h2 className={css.info}>LIFE SPAN: {dog.life_span}</h2>
                <h2 className={css.info}>TEMPERAMENT: {dog.temperament}</h2>
            </div>
            <div>
                <img className={css.image} src={dog.image} alt='' />
            </div>
        </div>
    )
};

export default Detail;