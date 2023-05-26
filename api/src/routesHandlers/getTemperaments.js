const axios = require("axios");
const { Temperament } = require('../db');
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const loadTemperaments = async () => {

    if (await Temperament.count() == 0) {//si no hay registros en la tabla, los cargo desde la API
        const apiData = (await axios.get(URL)).data;
        let temperamentsRaw = apiData.map(dog => dog.temperament ? dog.temperament
            : "No info").map(dog => dog?.split(', '));

        let allTemperaments = [...new Set(temperamentsRaw.flat())];//quedarme solo con temperamentos no repetidos de la data cruda
        allTemperaments.forEach(temp => {
            if (temp) Temperament.findOrCreate({ where: { name: temp } }) //recorro cada temperamento y lo voy metiendo en la db si es que no existe
        });
    }
    //Temperament.destroy({ where: {}, truncate: true }) //vaciar tabla (prueba)
    return await Temperament.findAll(); //retorno todos los temperamentos que ya quedaron cargados en la DB
};

const getTemperaments = async (req, res) => {
    try {
        const result = await loadTemperaments()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getTemperaments;