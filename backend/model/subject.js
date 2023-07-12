const mongoose = require("mongoose");

const SubjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  totalLectures: {
    type: Number,
    default: 10,
  },
  year: {
    type: String,
    required: true,
  },
  attendence: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "attendence",
  },
});

module.exports = mongoose.model("subject", SubjectSchema);
