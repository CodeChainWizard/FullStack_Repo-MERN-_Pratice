const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/artGallery");
    console.log("Connect to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
