const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../routesHandlers/getDogs");
const getRazaById = require("../routesHandlers/getRazaById");
const postDog = require("../routesHandlers/postDog");
const getTemperaments = require("../routesHandlers/getTemperaments");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs", getDogs); //obtener por nombre o sino traer todo
router.get("/dogs/:idRaza", getRazaById);
router.post("/dogs", postDog);
router.get("/temperaments", getTemperaments)


module.exports = router;
