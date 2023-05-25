const { Dog } = require("../db")
const axios = require("axios")
//const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`;

const getById = async (idRaza, source) => {
    const dog =
        source === "api" 
            ?(await axios.get(`${URL}/${idRaza}`))
            .data
            : await Dog.findByPk(idRaza)
    return dog
};

const getRazaById = async (req, res) => {
    try {
        const { idRaza} = req.params;
        const source = isNaN(idRaza) ? "db" : "api"; //si el id ingresado es UUID trabajo con DB sino con API
        const dog = await getById(idRaza, source);
        return res.status(200).json(dog);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getRazaById;