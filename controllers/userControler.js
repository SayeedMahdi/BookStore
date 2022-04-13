const modelUser = require("../Models/userMode");
const middlewares = require("../middlewares/async");

const emailMidlewares = require("../middlewares/emailMidles");

//insert new user
const insertUser = middlewares(async (req, res) => {
const { email, password,username } = req.body;
const valid = emailMidlewares.valid(email);
  
  const user = await emailMidlewares.userExist(email);
//cheak if user exist
  if (user) {
    res.status(409).json({ result: "Email exist in database" });
  } else if (valid) {
   
    const hashOne =await emailMidlewares.makeHash(password);
    const token = await emailMidlewares.makeToken(email, hashOne,username);
    const result = await modelUser.create({
      email: email,
      password: hashOne,
      username:username
    });
    
    res.status(200).json({ token: token });
  } else {
    res.status(400).json("not valid email or email exist .");
  }
});

const login = middlewares(async(req, res) => {
  const { email, password } = req.body;
  
  const user =await emailMidlewares.userExist(email);

  const confirmPassword =await  emailMidlewares.comare(password,user.password);
  if(user && confirmPassword){
    const makeHash = emailMidlewares.makeHash(password);
    const token = emailMidlewares.makeToken(email,makeHash);
    res.status(200).json(token);
  }else{
  res.status(404).json("someThing went wrong!");
  }
});

//login in user

module.exports = {
  insertUser,
  login,
};
