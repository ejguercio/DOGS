const { Dog, Temperament } = require("../db");
const axios =require("axios");

const createDog = async (name, height, weight, life_span, temperament) => {
    
    if(!name || !height || !weight || !life_span || !temperament) throw Error("missing data")
    const image= (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message; //obtengo img random (consultar)
    const newDog = await Dog.create({ name, height, weight, life_span, image })
    
    //temperament = temperament.split(", ") //provisorio porque aun no se que como lo voy a mandar del front
    temperament=[...new Set(temperament)];// en caso de que me llegaran temperamentos repetidos
    temperament.map(async (temp) => {
        const eachTemperament = await Temperament.findOne({ where: { name: temp } })
        await newDog.addTemperament(eachTemperament);
    })
    return newDog 
};

const postDog = async (req, res) => {
    try {
        const { name, height, weight, life_span, temperament } = req.body;
        await createDog(name, height, weight, life_span, temperament)
        return res.status(200).send("dog created successfully");
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = postDog;