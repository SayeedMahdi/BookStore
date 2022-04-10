const router = require("express").Router();
const BookControler = require("../controlers/booksControler");
const userConteroler = require("../controlers/userControler");

router
  .route("/Book")
  .post(BookControler.insertbook)
  .get(BookControler.Allbooks)
  .delete(BookControler.delet);
router.route("/Book/search").get(BookControler.search);
router.route("/User").post(userConteroler.insertUser);

module.exports = router;
