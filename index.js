const express = require('express');
const connect = require('./CONFIG/database.js');
const app = express();

app.use(express.json());



app.listen(4321, ()=>{
console.log("lisning port 4321");
});