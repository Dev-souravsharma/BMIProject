require("./config/db");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// Route
const routes = require("./Routes/userRoutes");

app.use("/", routes);

// Server
app.listen(3000, function (err) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Example app listening on port 3000!");
  }
});
