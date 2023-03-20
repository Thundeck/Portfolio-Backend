const express =  require("express")
const {createProyect,getAllProyects,deleteProyect,updateProyect} =  require("../Controllers/Proyect.controller")

const route = express.Router()

route.get("/", getAllProyects)

route.post("/", createProyect)


route.delete("/:id", deleteProyect)
route.put("/:id", updateProyect)

module.exports = route