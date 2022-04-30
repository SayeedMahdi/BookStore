const monogoose = require("mongoose");
const bookSchema = new monogoose.Schema({
    name:{
        type:String,
        required:[true,"Enter The name of the book"],
    },
    price:{
        type:Number,
        required:[true,"Enter The price of the book"],
    },
    author:{
        type:String,
        required:[true,"Enter The author of the book"],
    },
    description:{
        type:String,
        required:[true,"Enter The description of the book"],
    },
    url:{
        type:String,
        required:[true,"Enter The name of the book"],
    }

})
module.exports = monogoose.model("books",bookSchema);