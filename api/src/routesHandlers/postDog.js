const { Dog, Temperament } = require("../db");
const axios =require("axios");

const createDog = async (name, height, weight, life_span, temperament) => {
    
    if(!name || !height || !weight || !life_span || !temperament) throw Error("missing data")
    const image= (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message; //obtengo img random (consultar)
    const newDog = await Dog.create({ name, height, weight, life_span, image })
    
    temperament = temperament.split(", ") //provisorio porque aun no se que como lo voy a mandar del front
    temperament.map(async (element) => {
        const eachTemperament = await Temperament.findOne({ where: { name: element } })
        await newDog.addTemperament(eachTemperament);
    })
    return newDog 
};
//luego message perro creado con exito

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