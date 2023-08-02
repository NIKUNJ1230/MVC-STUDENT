const { Router } = require("express");
const { student_add } = require("../CONTROLLERS/student.controllers");
const { check_data } = require("../MIDDLEWARES/student.middleware");

let stdrouter = Router();

stdrouter.get("/", (req, res) => {
  console.log(req.query.category);
  res.send("Welcome to the express server");
});
stdrouter.get("/home", (req, res) => {
  res.render("index");
});

stdrouter.get("/login", (req, res) => {
  res.render("login");
});

stdrouter.post("/add", check_data, student_add);

module.exports = stdrouter;
