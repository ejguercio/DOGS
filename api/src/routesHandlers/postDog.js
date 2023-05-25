const { Dog, Temperament } = require("../db");

const createDog = async (name, height, weight, life_span, temperamentId) => {
    const newDog = await Dog.create({ name, height, weight, life_span })
    
    const temperament = await Temperament.findByPk(temperamentId)
    await newDog.addTemperament(temperament);
    return newDog
};


const postDog = async (req, res) => {
    try {
        const { name, height, weight, life_span, temperamentId } = req.body;
        const newDog = await createDog(name, height, weight, life_span, temperamentId)
        return res.status(200).json(newDog);
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = postDog;