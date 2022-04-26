const { verify } = require("../middlewares/emailMidles");
const { userExist } = require("../middlewares/emailMidles");
var user;
var flag;
const asyncWrapper = require("../middlewares/async");
const authControl = asyncWrapper(async (req, res, next) => {
  const { token } = req.headers;
  console.log("the toke", token);
  //show token is exist or no
  if (token) {
    const result = await verify(res, token);
    //show comment if token is correct
    console.log(result);

    user = await userExist(result.email);
    flag = result.password === user.password;

    //show every thing is correct
    if (user && flag && result) {
      next();
    } else {
      res.status(404).send("Somthing went wrong");
    }
  } else {
    res.status(403).send("you are not authorize");
  }
});
const asyncWrapper = require("../middlewares/async");
//admin auth
const adminAuth = asyncWrapper(async (req, res, next) => {
  const { token } = req.headers;
  //show token is exist or no
  if (token) {
    const result = await verify(res, token);
    //show comment if token is correct
    user = await userExist(result.email);
    flag = result.password === user.password;

    //show every thing is correct
    if (user && flag && result && user.role) {
      next();
    } else {
      res.status(404).send("Somthing went wrong");
    }
  } else {
    res.status(403).send("you are not authorize");
  }
});


module.exports = {authControl,adminAuth};
