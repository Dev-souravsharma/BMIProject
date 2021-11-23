const express = require("express");
const appRoute = express.Router();

const userControl = require("../Controller/userController");
appRoute.get("/", userControl.userDetails);
appRoute.post("/calculate", userControl.calculateBMI);

module.exports = appRoute;
