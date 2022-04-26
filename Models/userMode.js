const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required: [true, "you must enter an email."]
  },
  email: {
    type: String,
    required: [true, "you must enter an email."],
  },
  password: {
    type: String,
    required: [true, "you must enter a password"],
  },
  role:{
    type :Boolean,
    default: false
  }
});
module.exports = mongoose.model("userModel", userSchema);
