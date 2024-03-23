import axios from "axios";
import Swal from 'sweetalert2'

export const deleteDog = async (dog) => {
    try {
        const URL_BASE = process.env.REACT_APP_SERVER
        const response = (await axios.delete(`${URL_BASE}dogs/${dog.id}`)).data

        Swal.fire(`${response.message}`)

    } catch (error) {
        console.log(error.error.message)
    }
};
