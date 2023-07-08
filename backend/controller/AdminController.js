const { createUserName, hashPassword } = require("../utils/helpers");
const { MESSAGE } = require("../utils/site_config");
const AdminModel = require("./../model/admin");
const StudentModel = require("./../model/student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.addAdmin = async (req, res) => {
  try {
    const {
      name,
      password,
      dob,
      department,
      contactNumber,
      avatar,
      email,
      joiningYear,
    } = req.body;
    const checkEmailExist = await AdminModel.findOne({ email });
    if (checkEmailExist) {
      res.status(400).json({
        success: false,
        message: MESSAGE.EMAIL_ALREADY_TAKEN,
      });
    }
    const admins = await AdminModel.find({ department });
    const username = await createUserName(admins.length, "admin");
    const hashedPassword = await hashPassword(password);

    const newAdmin = await new AdminModel({
      name,
      email,
      password: hashedPassword,
      joiningYear,
      username,
      department,
      avatar,
      contactNumber,
      dob,
      passwordUpdated: false,
    });
    await newAdmin.save();
    //console.log("newAdmin **", newAdmin);
    const token = jwt.sign(
      {
        email: email,
        id: newAdmin._id,
      },
      "sEcReT",
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      success: true,
      message: MESSAGE.ADMIN_ADD_SUCCESSFULLY,
      response: { newAdmin, jwtToken: token },
    });
  } catch (err) {
    console.log("error **", err);
    res.status(500).json({
      success: false,
      message: MESSAGE.SOMETHING_WENT_WRONG,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await AdminModel.findOne({ username });
    if (!userExist) {
      return res.status(400).json({
        status: false,
        message: MESSAGE.USER_NOT_EXIST,
      });
    }
    const checkPassword = await bcrypt.compare(password, userExist.password);
    if (!checkPassword) {
      return res.status(400).json({
        status: false,
        message: MESSAGE.PASSWORD_NOT_MATCHED,
      });
    }
    const token = jwt.sign(
      {
        email: userExist.email,
        id: userExist._id,
      },
      "sEcReT",
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      status: true,
      message: MESSAGE.LOGIN_SUCCESS,
      response: { userExist, jwtToken: token },
    });
  } catch (err) {
    console.log("error **", err);
    res.status(500).json({
      success: false,
      message: MESSAGE.SOMETHING_WENT_WRONG,
    });
  }
};

module.exports.addStudent = async (req, res) => {
  try {
    const {
      name,
      dob,
      father_name,
      mother_name,
      email,
      batch,
      year,
      department,
      gender,
      student_mobile,
      section,
      avatar,
      father_occupation,
      father_mobile,
      mother_mobile,
      address,
      permanent_address,
      pincode,
      category,
      aadhar_no,
      pan_no,
      nationality,
      blood_group,
      tenth_percent,
      twelth_percent,
    } = req.body;
    const checkEmailExist = await StudentModel.findOne({ email });
    if (checkEmailExist) {
      res.status(400).json({
        success: false,
        message: MESSAGE.EMAIL_ALREADY_TAKEN,
      });
    }
    const students = await StudentModel.find({ department });
    const username = await createUserName(students.length, "student");
    const hashedPassword = await hashPassword(dob);

    const newStudent = await new StudentModel({
      password: hashedPassword,
      username,
      passwordUpdated: false,
      name,
      dob,
      father_name,
      mother_name,
      email,
      batch,
      year,
      department,
      gender,
      student_mobile,
      section,
      avatar,
      father_occupation,
      father_mobile,
      mother_mobile,
      address,
      permanent_address,
      pincode,
      category,
      aadhar_no,
      pan_no,
      nationality,
      blood_group,
      tenth_percent,
      twelth_percent,
    });
    await newStudent.save();
    //console.log("newAdmin **", newAdmin);
    return res.status(200).json({
      success: true,
      message: MESSAGE.Student_ADD_SUCCESSFULLY,
      response: newStudent,
    });
  } catch (err) {
    console.log("error **", err);
    res.status(500).json({
      success: false,
      message: MESSAGE.SOMETHING_WENT_WRONG,
    });
  }
};

module.exports.getAllStudents = async (req, res) => {
  try {
    const getAllStudent = await StudentModel.find();
    if (getAllStudent) {
      res.status(200).json({
        status: true,
        message: MESSAGE.STUDENT_LIST_FOUND,
        response: { getAllStudent },
      });
    } else {
      res.status(400).json({
        status: false,
        message: MESSAGE.STUDENT_LIST_NOT_FOUND,
      });
    }
  } catch (err) {
    console.log("err **", err);
    res.status(500).json({
      success: false,
      message: MESSAGE.SOMETHING_WENT_WRONG,
    });
  }
};
