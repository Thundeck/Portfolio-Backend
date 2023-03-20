const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    images: {
        type:Array,
    },
    name: {
        type:String,
        require:true,
    },
    deploy: {
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

const UserModel = mongoose.model("proyect", UserSchema)

module.exports = UserModel