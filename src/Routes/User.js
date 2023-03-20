const express =  require("express")
const {createUser,getAllUsers,deleteUser,authenticateUser} =  require("../Controllers/User.controller")

const route = express.Router()

route.get("/", getAllUsers)

route.post("/", createUser)
route.post("/login", authenticateUser)


route.delete("/:id", deleteUser)

module.exports = route