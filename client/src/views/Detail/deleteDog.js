import axios from "axios";

export const deleteDog = async (dog) => {
    try {
        const endpoint = `http://localhost:3001/dogs/${dog.id}`;
        const response = (await axios.delete(endpoint)).data
        console.log(response)
        alert(response.message)

    } catch (error) {
        console.log(error.error.message)
    }
};
