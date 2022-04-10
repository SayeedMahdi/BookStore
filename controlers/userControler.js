const modelUser = require("../Models/userMode");
const jwt = require("jsonwebtoken");
const middlewares = require("../middlewares/async");
const validator = require("validator");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const insertUser = middlewares(async (req, res) => {
    const value = req.body;
    console.log(value);
  const email = req.body.email;
  const password = req.body.password;
  const hashOne = await bcrypt.hash(password, salt);
  const secret = process.env.secret;
  const token = jwt.sign({ email, password }, secret);
  const valid = validator.isEmail(email);
  console.log(valid);
  if (valid) {
    const result = await modelUser.create({
      email: email,
      password: hashOne,
    });
    res.status(200).json({ result, token });
  }else{
      res.status(400).json("not valid email.");
  }
});
module.exports = {
  insertUser,
};
