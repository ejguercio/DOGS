const postDog = (req, res) => {
    try {
        res.send("crear perro aca")
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = postDog;