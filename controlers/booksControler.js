const modelbook = require("../Models/BooksModel");
const insertbook = async (req, res) => {
  try {
    const { name, price, description, author, url } = req.body;
    AbortController.log("kjkj");
    const result = await modelbook.create(
      name,
      price,
      description,
      author,
      url
    );
    console.log(result);
    res.status(200).send({mas:result});
  } catch (e) {
    res.send(e);
  }
};
module.exports = {
  insertbook,
};
