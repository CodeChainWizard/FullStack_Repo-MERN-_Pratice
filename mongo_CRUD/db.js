const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017");

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "mongoCRUD";
const clinet = new MongoClient(url);

const dbConnection = async () => {
  try {
    await clinet.connect();
    console.log("Connected to MongoDB server");

    const db = clinet.db(dbName);
    return db;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbConnection };
