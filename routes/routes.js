const router = require("express").Router();
const BookControler = require("../controllers/booksControler");
const userConteroler = require("../controllers/userControler");

router
  .route("/Book")
  .post(BookControler.insertbook)
  .get(BookControler.Allbooks)
  .delete(BookControler.deletebook);
router.route("/Book/search").get(BookControler.search);
router.route("/User").post(userConteroler.insertUser)
router.route("/User/login").post(userConteroler.login);

module.exports = router;
