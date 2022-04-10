const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "you must enter an email."],
  },
  password: {
    type: String,
    required: [true, "you must enter a password"],
  },
});
module.exports = mongoose.model("userModel", userSchema);
