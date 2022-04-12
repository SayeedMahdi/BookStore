const modelUser = require("../Models/userMode");
const jwt = require("jsonwebtoken");
const middlewares = require("../middlewares/async");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userMode = require("../Models/userMode");
const salt = bcrypt.genSaltSync(10);

//insert new user
const insertUser = middlewares(async (req, res) => {
  
  const { email, password } = req.body;

  const valid = validator.isEmail(email);
  const findEmail = userMode.find({ email: email });
  console.log(findEmail);
  if(findEmail === email){
    res.status(404).json("Email exist in database");
  }

  else if (valid ) {
    const hashOne = await bcrypt.hash(password, salt);
    const secret = process.env.secret;
    const token = jwt.sign({ email, password }, secret);
    const result = await modelUser.create({
      email: email,
      password: hashOne,
    });
    res.status(200).json({ result, token });
  } else {
    res.status(400).json("not valid email or email exist .");
  }
});

const login = middlewares((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("email:", email, "password:", password);
  res.status(200).json(email, password);
});

//login in user

module.exports = {
  insertUser,
  login,
};
