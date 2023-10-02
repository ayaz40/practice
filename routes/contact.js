const express = require("express");
const route = express.Router();
route.get("/", (req, res) => {
  res.render("contact", { title: "CONTACT" });
});
module.exports = route;
