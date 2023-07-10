const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  { strict: false }
);

module.exports = mongoose.model("department", DepartmentSchema);
