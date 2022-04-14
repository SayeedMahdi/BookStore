const {verify} = require("../middlewares/emailMidles");
const {userExist} = require("../middlewares/emailMidles");
var user;
var flag;
const authControl = async (req,res,next)=>{

    const {token} =await req.headers;
    //show token is exist or no
    if(token){
    const result =await verify(res,token);
    //show comment if token is correct
    if(result){
     user =await userExist(result.email);
     flag = (result.password === user.password);
    }else{
        res.status(404).json("token is wrong");
    }
    //show every thing is correct
    if(user && flag && result){
        next();
    }else{
        res.status(500).send("Somthing went wrong");
    }
    }else{
        res.status(403).send("you are not authorize")
    }
 

}
module.exports = authControl;