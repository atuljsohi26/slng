const express = require("express");
const { addAdmin } = require("../controller/AdminController");

const routes = express.Router();

routes.post("/add-admin", addAdmin);

module.exports = routes;
