const mongoose = require("mongoose");
let uri = "mongodb://localhost:27017/myapp";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
