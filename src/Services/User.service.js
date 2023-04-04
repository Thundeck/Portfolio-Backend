const UserModel = require("../Models/User")
const dotenv = require("dotenv")
dotenv.config()

const getAllUsers = async () =>{
    try {
        const data = await UserModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (data) => {

    const {
        password,
        email,
    } = data

    if (!password) throw "User's password is required";
    if (!email) throw "User's email is required";
    if (email !== process.env.USER_MAIL) throw "Please, if you are not the owner, do not attempt to log in";

    try {

        const address = await UserModel.findOne({email})
        if (address) throw "email already in use"

        const create = await UserModel.create({...data})

        return create

        
    } catch (error) {
        console.log(error)
    }

}

const deleteUser = async (_id) => {
    if(!_id) throw "cannot be deleted without identification"

    try {
        const deleted = await UserModel.findOneAndDelete({_id})
        return "borrado"
    } catch (error) {
        console.log(error)
    }

}

const authenticateUser = async (data) => {
    const { email, password } = data;
  
    const clientOnDb = await UserModel.findOne({email});
  
    if (!clientOnDb) throw "Please, if you are not the owner, do not attempt to log in.";
  
    if (password === process.env.PASS) {
      return clientOnDb;
    } else {
      throw "Password doesn't match";
    }
  };


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    authenticateUser,
}