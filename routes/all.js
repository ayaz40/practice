const express = require("express");
const routes = express.Router();
const home = require("./home");
const about = require("./about");
const contact = require("./contact");
routes.use("/", home);
routes.use("/about", about);
routes.use("/contact", contact);
module.exports = routes;
