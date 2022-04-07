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
  res.status(200).json({ tasks });
});
const search = asyncWrapper(async (req, res) => {
  //this is the object indepentent
  var { value } = req.query.data;
  
  
  const result = await modelbook.find({
    $or: [
      { name: { $regex: value, $options: "i" } },
      { price: { $eq: Number(value) ? +value : 0 } },
      { url: { $regex: value, $options: "i" } },
      { description: { $regex: value, $options: "i" } },
      { author: { $regex: value, $options: "i" } }
    ],
  });
  res.status(200).json({ resultis: result });
});
module.exports = {
  insertbook,
  Allbooks,
  search,
};
