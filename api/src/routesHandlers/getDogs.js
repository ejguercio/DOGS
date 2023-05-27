const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;
const formatDogApi = require("../utils/formatDogApi");
const formatDogDb = require("../utils/formatDogDb");
const { Op } = require('sequelize');
const MIN_LONG_NAME = 2;

const getAlldogs = async () => { //busco dogs en la api y en la base de datos y los junto
    let dbDogs = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: { attributes: [] },
        }
    });
    dbDogs = formatDogDb(dbDogs)

    const apiData = (await axios.get(`${URL}`)).data
    const apiDogs = formatDogApi(apiData) //aca voy a darle forma a la data de la API
    return [...dbDogs, ...apiDogs]
};

const getDogByName = async (name) => {
    if (name.length >= MIN_LONG_NAME) { //valido que se busque un nombre con al menos dos caracteres
        const dbDog = await Dog.findAll({
            where: {
                name: { [Op.iLike]: `%${name}%` } //Op.iLike busco tanto min como may y % % busco en todo value de name dicho nombre
            }
        })

        const apiData = (await axios.get(`${URL}`)).data
        let apiDogs = formatDogApi(apiData) //aca voy a darle forma a la data de la API
        apiDogs = apiDogs.filter((perro) => perro.name.toLowerCase().includes(name.toLowerCase()))

        return [...dbDog, ...apiDogs]
    } else {
        throw Error("el nombre a buscar deberia tener al menos 2 caracteres")
    }
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