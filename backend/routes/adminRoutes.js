const express = require("express");
const {
  addAdmin,
  login,
  addStudent,
} = require("../controller/AdminController");
const { auth } = require("../middleware/auth");

const routes = express.Router();

routes.post("/add-admin", addAdmin);
routes.post("/login", login);
routes.post("/addStudent", auth, addStudent);

module.exports = routes;
