const router = require("express").Router();
const BookControler = require("../controllers/booksControler");
const userConteroler = require("../controllers/userControler");
const {adminAuth,authControl} = require("../middlewares/auth");



router
  .route("/Book")
  .post(adminAuth,BookControler.insertbook)
  .get(BookControler.Allbooks)
  .delete(adminAuth,BookControler.deletebook);
router.route("/Book/search").get(BookControler.search);
router.route("/User").post(userConteroler.insertUser)
router.route("/User/login").post(userConteroler.login);
router.route("/buyBook").post(authControl,BookControler.buyBook)

module.exports = router;
