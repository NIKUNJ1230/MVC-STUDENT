const express = require('express');
const app = express();

app.use(express.json());



app.listen(4321, ()=>{
console.log("lisning port 4321");
});