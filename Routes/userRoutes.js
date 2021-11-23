const express = require("express");
const appRoute = express.Router();

const userControl = require("../Controller/userController");
appRoute.get("/", userControl.userDetails);
appRoute.post("/calculate", userControl.calculateBMI);
appRoute.post("/addData", userControl.addData);
appRoute.get("/getData", userControl.getData);
module.exports = appRoute;
