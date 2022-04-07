const express = require("express");
const app = express();

const notFound = require("./middlewares/404not-exist");
const DB = require("./dbConection/Db");
const route = require("./routes/routes");
const erroHandle = require("./middlewares/errorHandle");

require("dotenv").config();
app.use(erroHandle);
app.use(express.json());

app.use("/api/v1", route);
//midlle wares
app.use(express.json());
const port = process.env.PORT || 4000;
const mongoose_URI = process.env.MONGO_URI;
const start = async () => {
  try {
    await DB(mongoose_URI);
    app.listen(port, console.log(`app is listening in port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
app.use(notFound);
start();
