const {customAPIerror} = require("../error/error_Handler");
const errorHandlerMiddleware = async (err, req, res, next) => {
  if(err instanceof customAPIerror){
    return res.status(err.statusCode).json({msg:err.message})
}
res.status(500).json({msg:"Some problem happend please try again"});
  }
  
  module.exports = errorHandlerMiddleware