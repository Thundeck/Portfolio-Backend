const { Router } = require('express');
const router = Router();


// Importar todos los routers;

const User = require("./User");
const Proyect = require("./Proyect");
const Tech = require("./Tech");


// Configurar los routers
router.use("/user", User);
router.use("/proyect", Proyect);
router.use("/tech", Tech);





module.exports = router;