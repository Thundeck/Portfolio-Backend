const TechModel = require("../Models/Tech")
const dotenv = require("dotenv")
dotenv.config()

const getAllTechs = async () =>{
    try {
        const data = await TechModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createTech = async (body) => {

    const {
        name,
        icon
    } = body

    if (!name) throw "Tech's name is required";
    if (!icon) throw "Tech's icon is required";


    try {

        const create = await TechModel.create(body)

        const allTech = await TechModel.find()
        return allTech

        
    } catch (error) {
        console.log(error)
    }

}

const deleteTech = async (_id) => {
    if(!_id) throw "cannot be deleted without identification"

    try {
        const deleted = await TechModel.findOneAndDelete({_id})
        const allTech = await TechModel.find()
        return allTech
    } catch (error) {
        console.log(error)
    }

}


const updateTech = async (_id,body) => {
    const {name,icon} = body
    if(!_id) throw "cannot be updated without identification"
    if(!name||!icon ) throw "cannot be updated without information"

    try {
        const update = await TechModel.findOneAndUpdate({_id},{name,icon})
        return update
    } catch (error) {
        console.log(error)
    }

}


module.exports = {
    getAllTechs,
    createTech,
    deleteTech,
    updateTech
}