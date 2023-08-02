const mongoose = require("mongoose");

let studentschema = new mongoose.Schema({
  name: String,
  number: Number,
  course: String,
  grid: Number,
  city: String,
});

const student = mongoose.model("Student", studentschema);

module.exports = student;
