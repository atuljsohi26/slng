const express = require("express");
const {
  addAdmin,
  login,
  addStudent,
  getAllStudents,
  addDepartment,
  getAllDepartment,
  addSubject,
  getAllSubject,
  addFeeMaster,
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
routes.get("/getAllSubject", auth, getAllSubject);
routes.post("/addFeeMaster", auth, addFeeMaster);

module.exports = routes;
