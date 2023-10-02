const express = require("express");
const app = express();
const path = require("path");
const assets = path.join(__dirname, "assets");
app.set("view engine", "ejs");
app.use("/style", express.static(path.join(assets, "style")));
app.use("/img", express.static(path.join(assets, "img")));
const all = require("./routes/all");
app.use("/", all);
require("dotenv").config();
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`click me http://localhost:${port}`);
});
