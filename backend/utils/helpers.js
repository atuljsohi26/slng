const bcrypt = require("bcryptjs");

/** Create UserName */
module.exports.createUserName = async (dataLength, type) => {
  if (dataLength < 10) {
    helper = "00" + dataLength.toString();
  } else if (dataLength < 100 && dataLength > 9) {
    helper = "0" + dataLength.toString();
  } else {
    helper = dataLength.toString();
  }
  const date = new Date();
  let components = "";
  if (type == "admin") {
    components = ["ADM", date.getFullYear(), helper];
  } else if (type == "student") {
    components = ["STU", date.getFullYear(), helper];
  }
  const username = components.join("");
  return username;
};

/** Create Password */

module.exports.hashPassword = async (password) => {
  const encryptPassword = await bcrypt.hash(password, 10);
  return encryptPassword;
};
