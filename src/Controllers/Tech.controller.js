const TechService = require("../Services/Tech.service")

const getAllTechs = async (_req, res) =>{
    try {
        const Techs = await TechService.getAllTechs()
        res.json(Techs)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createTech = async (req, res) =>{
    try {
        const Tech = await TechService.createTech(req.body)
        res.status(200).json({Tech:Tech,msg:"created, check your email"})
    } catch (error) {
        res.status(400).send(error)

    }
}

const deleteTech = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await TechService.deleteTech(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

const updateTech = async (req, res) =>{
    const {id} = req.params
     const body = req.body

    try {
        const updated = await TechService.updateTech(id.body)
        res.json(updated)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllTechs,
    createTech,
    deleteTech,
    updateTech
}