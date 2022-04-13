const validator = require("validator");
const userModel = require("../Models/userMode");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
require("dotenv").config();
const secret = process.env.secret;

const valid = (email) => {
  return validator.isEmail(email);
};
const makeToken = (email, password,username) => {
  return jwt.sign({ email, password,username }, secret);
};

//method for hashing
const makeHash =(password) =>{
    return bcrypt.hash(password, salt);
}
//method for comparing
const comare =(password,userPassword) =>{
    return bcrypt.compare(password, userPassword);
}


const userExist = (email) => {
  const user = userModel.findOne({ email: email }).select("password").lean();

  return user;
};

module.exports = {
  valid,
  userExist,
  makeToken,
  makeHash,
  comare
};
