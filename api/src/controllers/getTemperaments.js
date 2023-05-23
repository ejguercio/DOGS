const getTemperaments = (req, res) => {
    try {
        res.send("ruta obtener temperamento")
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getTemperaments;