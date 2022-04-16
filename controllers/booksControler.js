const modelbook = require("../Models/BooksModel");
const asyncWrapper = require("../middlewares/async");
const insertbook = asyncWrapper(async (req, res) => {
  const { name, price, description, author, url } = req.body.e;
  console.log(req.body);

  //create Book route
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
  res.status(200).json(tasks);
});

//search api books
const search = asyncWrapper(async (req, res) => {
  //this is the object indepentent
  var { value } = req.query;

  const result = await modelbook.find({
    $or: [
      { name: { $regex: value, $options: "i" } },
      { price: { $eq: Number(value) ? +value : 0 } },
      { url: { $regex: value, $options: "i" } },
      { description: { $regex: value, $options: "i" } },
      { author: { $regex: value, $options: "i" } },
    ],
  });
  res.status(200).json(result);
});

// delet tasks
const deletebook = asyncWrapper(async (req, res) => {
  const id = req.query._id;
  console.log(req.query);
  const result = await modelbook.findOneAndDelete({ _id: id });
  if (!result) {
    res.status(404);
  }
  res.status(200).json(result);
});
//buy book
const buyBook = asyncWrapper((req,res) =>{
  const {name} =req.body;
});

//exports
module.exports = {
  insertbook,
  Allbooks,
  search,
  deletebook,
  buyBook
};
