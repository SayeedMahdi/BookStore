const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    bookId:[{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"books"
    }],
    userId:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    phone:{
        type:String,
        required:["you must enter a phone",true]
    },
    address:String
});
module.exports = mongoose.model("buybooks",bookSchema);