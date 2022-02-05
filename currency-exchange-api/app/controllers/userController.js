var express = require("express");
var userRoutes = express.Router();
const UserService = require("../services/userService");
const userObj = new UserService();

userRoutes.post("/signup", async (req, res) => {
    const body = req.body;
    return res.send(await userObj.addNewUser(body).then((res) => res));

});

module.exports = userRoutes;