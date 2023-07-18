const mongoose = require("mongoose");

const FeeMasterSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  course_fee: {
    type: Number,
    required: true,
  },
  form_fee: {
    type: Number,
    required: true,
  },
  uniform_fee: {
    type: Number,
    required: true,
  },
  caution_money: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("feemaster", FeeMasterSchema);
