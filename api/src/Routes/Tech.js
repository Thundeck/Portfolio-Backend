const express =  require("express")
const {createTech,getAllTechs,deleteTech,updateTech} =  require("../Controllers/Tech.controller")

const route = express.Router()

route.get("/", getAllTechs)

route.post("/", createTech)

route.delete("/:id", deleteTech)

route.put("/:id", updateTech)

module.exports = route