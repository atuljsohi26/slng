const express = require("express");
const {
  addAdmin,
  login,
  addStudent,
  getAllStudents,
  addDepartment,
  getAllDepartment,
  addSubject,
} = require("../controller/AdminController");
const { auth } = require("../middleware/auth");

const routes = express.Router();

routes.post("/add-admin", addAdmin);
routes.post("/login", login);
routes.post("/addStudent", auth, addStudent);
routes.get("/getAllStudent", auth, getAllStudents);
routes.post("/addDepartment", auth, addDepartment);
routes.get("/getAllDepartment", auth, getAllDepartment);
routes.post("/addSubject", auth, addSubject);

module.exports = routes;
