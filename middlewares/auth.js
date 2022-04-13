const {verify} = require("../middlewares/emailMidles");
const {userExist,comare} = require("../middlewares/emailMidles");

const authControl = async (req,res,next)=>{

    const {token} =await req.headers;
    if(token){
    const result =await verify(res,token);
    const user =await userExist(result.email);
    const flag = (result.password === user.password);
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