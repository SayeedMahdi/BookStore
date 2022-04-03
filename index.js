const express =require("express");
const app = express();
const port = process.env.PORT || 4000;
try{
app.listen(port,console.log(`app is listening in port ${port}` ));
}catch(err){
    console.log(err);
}