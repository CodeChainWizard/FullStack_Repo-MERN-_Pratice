const mongoose = require("mongoose");

const dbConnetion = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mernProject1_Reg_Login");
    console.log("Connection Done");
  } catch (error) {
    console.log(error, "Connection failed");
  }
};

module.exports = dbConnetion;
