const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    images: {
        type:String,
    },
    name: {
        type:String,
        require:true,
    },
    deploy: {
        type:String
    },
    description: {
        type:String
    },
    repo: {
        type:String,
        require:true
    },
    techs:{
        type:[OBJECT],
        require:true,
        ref:"tech"
    }

})

const UserModel = mongoose.model("project", UserSchema)

module.exports = UserModel