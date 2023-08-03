const mongoose = require("mongoose");

const connect = async () => {
  try {
  
  await mongoose.connect(
    "mongodb://127.0.0.1:27017"
  );
  console.log("Connected to the server");
    
  } 
  catch (error) {
    console.log(error.message);
  }
};

module.exports = connect;
connect();