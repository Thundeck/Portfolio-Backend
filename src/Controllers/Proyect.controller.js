const ProyectService = require("../Services/Proyect.service")

const getAllProyects = async (_req, res) =>{
    try {
        const Proyects = await ProyectService.getAllProyects()
        res.json(Proyects)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createProyect = async (req, res) =>{
    try {
        const Proyect = await ProyectService.createProyect(req.body)
        res.status(200).json({Proyect:Proyect,msg:"created, check your email"})
    } catch (error) {
        res.status(400).send(error)

    }
}

const deleteProyect = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await ProyectService.deleteProyect(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const updateProyect = async (req, res) =>{
    const {id} = req.params
    const {body} = req

    try {
        const updated = await ProyectService.updateProyect(id,body)
        res.json(updated)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllProyects,
    createProyect,
    deleteProyect,
    updateProyect
}