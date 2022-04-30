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
const makeToken = (id,email, password,username) => {
  return jwt.sign({ id,email, password,username }, secret, {
    expiresIn: "10h" });
};

const verify =async  (res,token) => {
  try{
    const result =await jwt.verify(token,secret);
    console.log(result);
     return result;
  }catch(err){
   res.status(400).send("wrong token passed");
  }
     
}

//method for hashing
const makeHash =(password) =>{
    return bcrypt.hash(password, salt);
}
//method for comparing
const comare =(password,userPassword) =>{
    return bcrypt.compare(password, userPassword);
}


const userExist =async (email) => {
  const user = await userModel.findOne({ email: email }).select("password email username role").lean(); 
  return user;
};

module.exports = {
  valid,
  userExist,
  makeToken,
  makeHash,
  comare,
  verify
};
