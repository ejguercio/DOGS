const { deleteDogDB } = require("../controllers/dogs");

const deleteDogById = async (req, res) => {
    try {
        const { idDog } = req.params;
        await deleteDogDB(idDog);
        return res.status(200).json({ "message": "dog deleted" })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

module.exports = deleteDogById;
