const express = require("express");
const app = express();

const dbConnection = require("./db");
dbConnection();

app.listen(8080, () => {
  console.log("Port running on:- ", 8080);
});
