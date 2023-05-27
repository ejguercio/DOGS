const { Dog } = require("../db")
const axios = require("axios")
//const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds`;

const getById = async (idDog, source) => {
    const dog =
        source === "api" 
            ?(await axios.get(`${URL}/${idDog}`))
            .data
            : await Dog.findByPk(idDog)
    return dog
};

const getDogById = async (req, res) => {
    try {
        const { idDog} = req.params;
        const source = isNaN(idDog) ? "db" : "api"; //si el id ingresado es UUID trabajo con DB sino con API
        const dog = await getById(idDog, source);
        return res.status(200).json(dog);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getDogById;