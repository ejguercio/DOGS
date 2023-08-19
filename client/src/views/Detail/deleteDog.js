import axios from "axios";
import Swal from 'sweetalert2'

export const deleteDog = async (dog) => {
    try {
        const endpoint = `http://localhost:3001/dogs/${dog.id}`;
        const response = (await axios.delete(endpoint)).data

        Swal.fire(`${response.message}`)

    } catch (error) {
        console.log(error.error.message)
    }
};
