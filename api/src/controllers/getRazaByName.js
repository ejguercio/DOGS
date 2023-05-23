const getRazaByName = (req, res) => {
    try {
       return res.send("ruta obtener raza a partir de un nombre")
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getRazaByName;