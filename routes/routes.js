const router = require("express").Router();
const controler = require("../controlers/booksControler");
router.get("/home",(req,res)=>{
    res.send("welcome home");
}
);
router.route("/",(req,res)=>{
    res.send("<h1>hello world</h1>")
})
router.route("/Book").post(controler.insertbook).get(controler.Allbooks);
router.route("/Book/search").get(controler.search);

module.exports =router;