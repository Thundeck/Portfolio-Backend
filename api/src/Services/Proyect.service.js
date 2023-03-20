const ProyectModel = require("../Models/Proyect")
const dotenv = require("dotenv")
dotenv.config()

const getAllProyects = async () =>{
    try {
        const data = await ProyectModel.find().populate("techs",{
            name:1,
            icon:1,
            _id:0
        })
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createProyect = async (body) => {

    const {
        name,
        techs,
        repo,
    } = body

    if (!name) throw "Proyect's name is required";
    if (!repo) throw "Proyect's repo is required";
    if (!techs) throw "Proyect's techs is required";

    try {

        const create = await ProyectModel.create(body)

        return create

        
    } catch (error) {
        console.log(error)
    }

}

const updateProyect = async (_id,body) => {

    const {
        name,
        techs,
        repo,
        deploy
    } = body

    if (!name || !techs ||!repo || !deploy ) throw "All information is required"; 

    try {

        const update = await ProyectModel.findOneAndUpdate({_id},{body})

        return update
        
    } catch (error) {
        console.log(error)
    }

}

const deleteProyect = async (_id) => {
    if(!_id) throw "cannot be deleted without identification"

    try {
        const deleted = await ProyectModel.findOneAndDelete({_id})
        return "borrado"
    } catch (error) {
        console.log(error)
    }

}


module.exports = {
    getAllProyects,
    createProyect,
    deleteProyect,
    updateProyect
}