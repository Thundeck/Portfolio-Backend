const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    password: {
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
        unique:true
    }
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel