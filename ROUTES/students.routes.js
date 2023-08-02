const {Router} = require('express');


let stdrouter = Router();

stdrouter.get('/', function(req, res) {
    console.log(req.query.category);
    res.send("Welcome to the express server")
});