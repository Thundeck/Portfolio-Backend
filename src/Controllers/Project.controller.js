const ProjectService = require("../Services/Project.service")

const getAllProjects = async (_req, res) =>{
    try {
        const Projects = await ProjectService.getAllProjects()
        res.json(Projects)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createProject = async (req, res) =>{
    try {
        const Project = await ProjectService.createProject(req.body)
        res.status(200).json({Project:Project,msg:"created, check your email"})
    } catch (error) {
        res.status(400).send(error)

    }
}

const deleteProject = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await ProjectService.deleteProject(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const updateProject = async (req, res) =>{
    const {id} = req.params
    const {body} = req

    try {
        const updated = await ProjectService.updateProject(id,body)
        res.json(updated)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    updateProject
}