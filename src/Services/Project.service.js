const ProjectModel = require("../Models/Project")
const dotenv = require("dotenv")
const cloudinary = require('../utils/cluodinary')
dotenv.config()

const getAllProjects = async () =>{
    try {
        const data = await ProjectModel.find().populate("techs",{
            name:1,
            icon:1,
        })
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createProject = async (body) => {

    const {
        name,
        techs,
        repo,
        images
    } = body

    if (!name) throw "Project's name is required";
    if (!repo) throw "Project's repo is required";
    if (!techs) throw "Project's techs is required";

    try {

        const imageUpload = await cloudinary.uploader.upload(images, {
            folder: "Portfolio"
          });

        const create = await ProjectModel.create({...body, images:imageUpload.secure_url})
        const data = await ProjectModel.find().populate("techs",{
            name:1,
            icon:1,
        })

        return data

        
    } catch (error) {
        console.log(error)
    }

}

const updateProject = async (_id,body) => {

    const {
        name,
        techs,
        repo,
        deploy
    } = body

    if (!name || !techs ||!repo || !deploy ) throw "All information is required"; 

    try {

        const update = await ProjectModel.findOneAndUpdate({_id},{body})

        return update
        
    } catch (error) {
        console.log(error)
    }

}

const deleteProject = async (_id) => {
    if(!_id) throw "cannot be deleted without identification"

    try {
        const deleted = await ProjectModel.findOneAndDelete({_id})
        const data = await ProjectModel.find().populate("techs",{
            name:1,
            icon:1,
        })
        return data
    } catch (error) {
        console.log(error)
    }

}


module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    updateProject
}