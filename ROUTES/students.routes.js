const {Router} = require('express');
const {student_add} = require('../CONTROLLERS/student.controler');
// const 

let stdrouter = Router();

stdrouter.get('/', function(req, res) {
    console.log(req.query.category);
    res.send("Welcome to the express server")
});