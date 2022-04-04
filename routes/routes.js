const router = require("express").Router();
const controler = require("../controlers/booksControler");
router.get("/home",(req,res)=>{
    res.send("welcome home");
}
);
router.route("/Book").post(controler.insertbook);


module.exports =router;