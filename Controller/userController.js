module.exports.userDetails = (req, res) => {
  res.send("Hello");
};
module.exports.calculateBMI = (req, res) => {
  console.log(req.body);
  let height = req.body.height;
  let weight = req.body.weight;
  let heightSquare = height * height;
  let result = weight / heightSquare;
  console.log(result);
  res.send(result.toFixed(2) + "");
};
