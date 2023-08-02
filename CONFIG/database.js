const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://nikunjnavapara51:studentmvc@cluster0.eo6wq2l.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Connected to the server");
  res.send("done");
};

module.exports = connect;
