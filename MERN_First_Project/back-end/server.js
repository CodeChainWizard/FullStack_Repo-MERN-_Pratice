const express = require("express");
const app = express();
const port = 8000;
const dbConnetion = require("./db/dbConnection");
const User = require("./db/User.js");
const cors = require("cors");

//---dbConnection
dbConnetion();

//---- parse the json data.
app.use(express.json());

app.use(cors());

//----Registerd a new user to database
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // if (!username || !password) {
    //   res.status(401).json({ messgae: "Username and Password is required!" });
    // }

    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ success: "User Created" });
  } catch (error) {
    res.status(500).json({ error: "User Failed" });
  }
});

//---- Login check for existing users
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).exec();
    if (!user) {
      return res.status(401).json({ message: "Invalid user Name" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid user Password" });
    }

    res.status(200).json({ success: "User Login" });
  } catch (error) {
    res.status(500).json({ error: "Failed to login" });
  }
});

app.listen(port, () => {
  console.log(`Port Running on ${port}`);
});
