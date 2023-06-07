import { useNavigate } from "react-router-dom";
import css from "./Landing.module.css";

const Landing = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/home");
    }
    return (
        <div className={css.landingImg}>
            <p className={css.title} >Bienvenido a Henry Dogs, encontrarás mucha información sobre perros</p>

            <button className={css.button} onClick={login}>Ingresar</button>
        </div>
    )
};

export default Landing;