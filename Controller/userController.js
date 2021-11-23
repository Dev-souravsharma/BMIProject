require("../Models/userModel");
const mongoose = require("mongoose");
let User = mongoose.model("user");
module.exports.userDetails = (req, res) => {
  res.send("Hello");
};
module.exports.calculateBMI = (req, res) => {
  console.log(req.body);
  let weightStatus = "";
  let message = "";
  let height = req.body.height;
  let weight = req.body.weight;
  let heightSquare = height * height;
  let result = (weight / heightSquare).toFixed(2);
  let newResult = parseInt(result);
  if (newResult < 18.5) {
    weight = "Underweight";
    message = "You Should eat a little bit more.";
  } else if (newResult > 18.5 && newResult < 24.9) {
    weight = "Normal";
    message = "Keep doing what you are doing.";
  } else if (newResult > 25.0 && newResult < 29.9) {
    weight = "OverWeight";
    message = "You Should cut down on your food a little bit.";
  } else {
    weight = "obese";
    message = "You Should really do something about your appetite ASAP";
  }
  res.status(200).json({
    message: message,
    data: result,
    status: "1",
    weightStatus: weight,
    success: true,
  });
};
module.exports.addData = (req, res) => {
  console.log(req.body);
  let height = req.body.height;
  let weight = req.body.weight;
  let heightSquare = height * height;
  let result = (weight / heightSquare).toFixed(2);
  let newData = new User({
    name: req.body.name,
    height: req.body.height,
    weight: req.body.weight,
    time: req.body.time,
    bmi: result,
  });
  return newData
    .save()
    .then((docs) => {
      res.status(200).json({
        message: "Data inserted",
        data: docs,
        success: true,
      });
    })
    .catch((error) => {
      res.status(401).json({
        message: "Error",
        data: error.message(),
        success: false,
      });
    });
};
module.exports.getData = (req, res) => {
  return User.find()
    .then((docs) => {
      res.status(200).json({
        message: "List Data",
        data: docs,
        success: true,
      });
    })
    .catch((err) => {
      res.status(401).json({
        message: "Error",
        data: err.message(),
        success: false,
      });
    });
};
