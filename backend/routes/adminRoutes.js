const express = require("express");
const { addAdmin, login } = require("../controller/AdminController");

const routes = express.Router();

routes.post("/add-admin", addAdmin);
routes.post("/login", login);

module.exports = routes;
