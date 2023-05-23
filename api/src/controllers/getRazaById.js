const getRazaById = (req, res) => {
    try {
        res.send("ruta obtener raza por un id")
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getRazaById;