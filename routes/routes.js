const router = require("express").Router();
const BookControler = require("../controllers/booksControler");
const userConteroler = require("../controllers/userControler");
const authControl = require("../middlewares/auth");



router
  .route("/Book")
  .post(BookControler.insertbook)
  .get(BookControler.Allbooks)
  .delete(BookControler.deletebook);
router.route("/Book/search").get(BookControler.search);
router.route("/User").post(userConteroler.insertUser)
router.route("/User/login").post(userConteroler.login);
router.route("/buyBook").post(authControl,BookControler.buyBook)
router.get("/download",(req,res) =>{
  res.download("../first home work.pdf","dowload.pdf");
});

module.exports = router;
