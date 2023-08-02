const express = require("express");
const connect = require("./CONFIG/database.js");
const students = require("./MODELS/students.schema.js");
const cors = require("cors");
const stdrouter = require("./ROUTES/students.routes.js");
const app = express();

app.set("view engine", "ejs");
app.set("view", __dirname + "/views");

app.use(cors());
app.use("/student", stdrouter);
app.use(express.json());

app.listen(4321, () => {
  console.log("lisning port 4321");
});
