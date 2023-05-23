const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../controllers/getDogs");
const getRazaById = require("../controllers/getRazaById");
const getRazaByName = require("../controllers/getRazaByName");
const postDog = require("../controllers/postDog");
const getTemperaments = require("../controllers/getTemperaments");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", getDogs);
router.get("/dogs/:idRaza", getRazaById);
router.get("/dogs/name", getRazaByName);
router.post("/dogs", postDog);
router.get("/temperaments", getTemperaments)


module.exports = router;
