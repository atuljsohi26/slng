const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subject",
    },
  ],
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  father_name: {
    type: String,
  },
  mother_name: {
    type: String,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
  },
  student_mobile: {
    type: Number,
  },
  father_mobile: {
    type: Number,
  },
  mother_mobile: {
    type: Number,
  },
  dob: {
    type: String,
    required: true,
  },
  passwordUpdated: {
    type: Boolean,
    default: false,
  },
  father_occupation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  permanent_address: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  aadhar_no: {
    type: Number,
    required: true,
  },
  pan_no: {
    type: String,
    required: true,
  },
  Nationality: {
    type: String,
  },
  blood_group: {
    type: String,
  },
  tenth_percent: {
    type: Number,
    required: true,
  },
  twelth_percent: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("student", StudentSchema);
