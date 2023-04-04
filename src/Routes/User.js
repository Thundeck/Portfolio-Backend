const express =  require("express")
const {getAllUsers,deleteUser,authenticateUser} =  require("../Controllers/User.controller")

const route = express.Router()

route.get("/", getAllUsers)

route.post("/login", authenticateUser)

route.delete("/:id", deleteUser)

module.exports = route