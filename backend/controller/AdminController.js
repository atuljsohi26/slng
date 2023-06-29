const { createUserName, hashPassword } = require("../utils/helpers");
const { MESSAGE } = require("../utils/site_config");
const AdminModel = require("./../model/admin");
const jwt = require("jsonwebtoken");

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
