const mongoose = require("mongoose")
const conection = (url)=>{

   return mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    })
}
module.exports = conection;