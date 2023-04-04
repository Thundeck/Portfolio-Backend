const mongoose = require("mongoose")
const dotenv = require("dotenv");
const { createUser } = require("./Controllers/User.controller");
dotenv.config()

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

db.on("connected",()=>{
    console.log("%cConnected to Mongo","color:green");
})

db.on("error",()=>{
    console.log("%cMongo it's bad","color:red");
})

module.exports = mongoose