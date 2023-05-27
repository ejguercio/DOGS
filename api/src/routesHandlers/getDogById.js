const { Dog, Temperament } = require("../db")
const axios = require("axios");
const formatDogDb = require("../utils/formatDogDb");
const formatDogApi = require("../utils/formatDogApi");
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getById = async (idDog, source) => {
    let dogById = [];
    //BUSCO EN LA API
    if (source === "api") {
        let dogData = (await axios.get(`${URL}`)).data
        dogData = dogData.find(dog => dog.id == idDog)
        if (dogData == undefined) throw Error("id not found");

        dogById.push(dogData)
        dogById = formatDogApi(dogById)
        return dogById
    }
    //BUSCO EN LA DB
    let dogData = await Dog.findOne({
        where: { id: idDog }, include: {
            model: Temperament,
            attributes: ['name'],
            through: { attributes: [] },
        }
    })
    dogById.push(dogData)
    dogById = formatDogDb(dogById)
    return dogById
};

const getDogById = async (req, res) => {
    try {
        const { idDog } = req.params;
        const source = isNaN(idDog) ? "db" : "api"; //si el id ingresado es UUID trabajo con DB sino con API
        const dog = await getById(idDog, source);
        return res.status(200).json(dog);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
};

module.exports = getDogById;