const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  time: {
    type: String,
  },
});
mongoose.model("user", userSchema);
