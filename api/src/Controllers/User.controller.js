const UserService = require("../Services/User.service")

const getAllUsers = async (_req, res) =>{
    try {
        const Users = await UserService.getAllUsers()
        res.json(Users)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createUser = async (req, res) =>{
    try {
        const User = await UserService.createUser(req.body)
        res.status(200).json({user:User,msg:"created, check your email"})
    } catch (error) {
        res.status(400).send(error)

    }
}

const authenticateUser = async (req, res) => {
    try {
      const User = await UserService.authenticateUser(req.body);
      res.status(200).json(User);
    } catch (error) {
      res.status(400).send(error);
    }
  };

const deleteUser = async (req, res) =>{
    const {id} = req.params

    try {
        const deleted = await UserService.deleteUser(id)
        res.json(deleted)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    authenticateUser
}