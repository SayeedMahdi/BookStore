const modelbook = require("../Models/BooksModel");
const asyncWrapper = require("../middlewares/async");
const insertbook = asyncWrapper(async (req, res) => {
  const { name, price, description, author, url } = req.body.data;
  
  const result = await modelbook.create({
    name,
    price,
    description,
    author,
    url,
  });
  res.status(200).send({ mas: result });
});
const Allbooks = asyncWrapper(async (req, res) => {
  const tasks = await modelbook.find({});
  res.status(200).json( tasks );
});
const search = asyncWrapper(async (req, res) => {
  //this is the object indepentent
  var { value}  = req.query;
  console.log("'vle..........................",value);
  const result = await modelbook.find({
    $or: [
      { name: { $regex: value, $options: "i" } },
      { price: { $eq: Number(value) ? +value : 0 } },
      { url: { $regex: value, $options: "i" } },
      { description: { $regex: value, $options: "i" } },
      { author: { $regex: value, $options: "i" } }
    ],
  });
  res.status(200).json( result );
});
// delet tasks 
const delet = asyncWrapper(async (req,res)=>{
  const id = req.query.id;
  const result = await modelbook.findOneAndDelete({_id:id});
  if(!result){
    res.status(404);
  }
  res.status(200).send(result);
})
module.exports = {
  insertbook,
  Allbooks,
  search,
  delet
};
