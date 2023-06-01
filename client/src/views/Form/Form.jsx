import css from "./Form.module.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_temperaments } from "../../redux/actions";
import { formatAndPost } from "./formatAndPost";

const Form = () => {
    //estado global con los temperamentos que tiene mi DB y los traere para mapearlos en mi SELECT options
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_temperaments())
    }, [dispatch])

    //estados locales
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);
    const [inputsForm, setInputsForm] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeMin: "",
        lifeMax: ""
    })

    //seteo el estado local con los temperamentos que voy seleccionando y los demas estados el input
    const handleSelectChange = (event) => {
        const selectedOp = Array.from(event.target.selectedOptions, (option) => option.value); //recibe un iterable y permite mapear para obtener nueva instancia
        setSelectedTemperaments([...selectedTemperaments, ...selectedOp]);
    };

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInputsForm({ ...inputsForm, [property]: value })
    };

    const handleSubmit= (event)=>{
        event.preventDefault();
        formatAndPost(inputsForm, selectedTemperaments)
    };

    const temperaments = useSelector(state => state.temperaments)//array con todos los temperamentos de la DB
    return (
        <form className={css.container} onSubmit={handleSubmit} >
            <div>
                <label className={css.labels}>Name</label>
                <input className={css.inputs} value={inputsForm.name} name="name" onChange={handleInputChange} />
            </div>
            <div>
                <label className={css.labels}>Height min.</label>
                <input className={css.inputs} value={inputsForm.heightMin} name="heightMin" onChange={handleInputChange} />
                <label className={css.labels}> max.</label>
                <input className={css.inputs} value={inputsForm.heightMax} name="heightMax" onChange={handleInputChange} />
            </div>
            <div>
                <label className={css.labels}>Weight min.</label>
                <input className={css.inputs} value={inputsForm.weightMin} name="weightMin" onChange={handleInputChange} />
                <label className={css.labels}>max.</label>
                <input className={css.inputs} value={inputsForm.weightMax} name="weightMax" onChange={handleInputChange} />
            </div>
            <div>
                <label className={css.labels}>Life span min.</label>
                <input className={css.inputs} value={inputsForm.lifeMin} name="lifeMin" onChange={handleInputChange} />
                <label className={css.labels}>max.</label>
                <input className={css.inputs} value={inputsForm.lifeMax} name="lifeMax" onChange={handleInputChange} />
            </div>
            <select className={css.select} multiple value={selectedTemperaments} onChange={handleSelectChange}>
                {temperaments.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <p>SELECTED TEMPERAMENTS: {selectedTemperaments.join(', ')}</p>
            <button className={css.button} type="submit" >Submit</button>

        </form>
    )
};

export default Form;