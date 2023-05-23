
const getDogs = (req, res) => {
    try {
        res.send("Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.")
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getDogs;