import css from "./Form.module.css"

const Form = () => {

    return (
        <form className={css.container}>
            <div>
                <label className={css.labels}>Name</label>
                <input className={css.inputs}/>
            </div>
            <div>
                <label className={css.labels}>Height min.</label>
                <input className={css.inputs}/>
                <label className={css.labels}> max.</label>
                <input className={css.inputs}/>
            </div>
            <div>
                <label className={css.labels}>Weight min.</label>
                <input className={css.inputs}/>
                <label className={css.labels}>max.</label>
                <input className={css.inputs}/>
            </div>
            <div>
                <label className={css.labels}>Life span min.</label>
                <input className={css.inputs}/>
                <label className={css.labels}>max.</label>
                <input className={css.inputs}/>
            </div>
            
        </form>
    )
};

export default Form;