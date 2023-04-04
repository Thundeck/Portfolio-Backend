const express =  require("express")
const {createProject,getAllProjects,deleteProject,updateProject} =  require("../Controllers/Project.controller")

const route = express.Router()

route.get("/", getAllProjects)

route.post("/", createProject)


route.delete("/:id", deleteProject)
route.put("/:id", updateProject)

module.exports = route