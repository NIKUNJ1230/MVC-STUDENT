const { Router } = require("express");
const { student_add } = require("../CONTROLLERS/student.controllers");
const { check_data } = require("../MIDDLEWARES/student.middleware");

let stdrouter = Router();

stdrouter.get("/", (req, res) => {
  console.log(req.query.category);
  res.send("Welcome to the express server");
});

module.exports = stdrouter;
