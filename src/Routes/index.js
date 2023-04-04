const { Router } = require('express');
const router = Router();


// Importar todos los routers;

const User = require("./User");
const Project = require("./Project");
const Tech = require("./Tech");


// Configurar los routers
router.use("/user", User);
router.use("/project", Project);
router.use("/tech", Tech);





module.exports = router;