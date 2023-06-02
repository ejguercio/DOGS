const regexName = /^(?!.*\s{2})[a-zA-Z\s]{2,18}$/; //nombre entre 2 y 18 caracteres de solo letras y no mas de 1 espacio consecutivo
const reNums=/^[0-9]+$/ //solo permite el ingreso de numeros

const validation = ({ name, heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax }) => {
    const errors = {}
    if (!regexName.test(name)) errors.name = "ingrese un nombre valido"
    if (!reNums.test(heightMin)||!reNums.test(heightMax)||!reNums.test(weightMin)||!reNums.test(weightMax) ||!reNums.test(lifeMin)||!reNums.test(lifeMax)){
        errors.metrics= "solo ingresar numeros | no dejar campos vacios"
    } 
    
    return errors
};

export default validation;