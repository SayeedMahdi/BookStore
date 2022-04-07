var app = require("express")();
app.use(require("express").json())
app.on('error', console.log)
app.listen(3000, () => console.log("Listening at port 3000 "))