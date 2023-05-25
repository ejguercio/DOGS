const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const formatData = require("../utils/formatData")

const getAlldogs = async () => { //busco dogs en la api y en la base de datos y los junto
    const dbDogs = await Dog.findAll({
        include: {
          model: Temperament,
          attributes: ['name'],
          through: { attributes: [] },
        }
    });

    const apiData = (await axios.get(`${URL}`)).data
    const apiDogs = formatData(apiData) //aca voy a darle forma a la data de la API
    return [...dbDogs, ...apiDogs]
};

const getDogByName = async (name) => {
    const dbDog = await Dog.findAll({ where: { name } }) //averiguar como buscar nombre no exacto

    const apiData = (await axios.get(`${URL}`)).data
    let apiDogs = formatData(apiData) //aca voy a darle forma a la data de la API
    apiDogs = apiDogs.filter((perro) => perro.name.toLowerCase().includes(name.toLowerCase()))

    return [...dbDog, ...apiDogs]
};

const getDogs = async (req, res) => { //si tengo query con nombre busco traigo perro por nombre sino traigo todos
    try {
        const { name } = req.query;
        const results = name ? await getDogByName(name) : await getAlldogs()
        return res.status(200).json(results)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getDogs;