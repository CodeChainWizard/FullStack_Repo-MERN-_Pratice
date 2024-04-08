const express = require("express");
const app = express();
const port = 5000;
const cookie = require("cookie-parser");
const cors = require("cors");

const dbConnection = require("./db/db");

//---- Database Connection
app.use(express.json());
app.use(cookie());
// app.use(express.cors());

app.listen(port, () => {
  console.log(`Port running on: ${port}`);
});

// Routes
app.use("/user", require("./routes/userRoutes"));

dbConnection();
