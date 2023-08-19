import axios from "axios";
//hago unos ajustes en el formato que voy a enviar la informacion y realizo mi metodo POST
import Swal from 'sweetalert2'

export const formatAndPost = async ({ name, heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax }, selectedTemp) => {
    try {
        const newDog = {
            name: name,
            height: `${heightMin} - ${heightMax}`,
            weight: `${weightMin} - ${weightMax}`,
            maxWeight: parseInt(weightMax),
            life_span: `${lifeMin} - ${lifeMax}`,
            temperament: selectedTemp
        }
        const endpoint = `http://localhost:3001/dogs`;
        const response = await axios.post(endpoint, newDog)
        //alert(response.data)
        Swal.fire(`${response.data}`)
    } catch (error) {
        Swal.fire(`${error.response.data.error}`)
    }
};
