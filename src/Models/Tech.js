const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = new Schema({
    icon: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true,
    }

})

const UserModel = mongoose.model("tech", UserSchema)

module.exports = UserModel