const User = require("../db/users");
const brcypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userCtrl = {
  register: async (req, res) => {
    const { name, email, password, number } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password length enter grather than 8" });
    }
    const passwordHash = await brcypt.hash(password, 10);
    const newUser = new User({ name, email, password: passwordHash, number });
    const accessToken = createAccessToken({ id: newUser._id });
    const refreshtoken = createRefreshToken({ id: newUser._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    await newUser.save();
    res.status(200).json({ accessToken, refreshtoken });
  },

  refreshtoken: async (req, res) => {
    try {
      const rt_token = req.cookies.refreshToken;

      if (!rt_token) {
        return res.status(400).json({ message: "Please login or register" });
      }

      jwt.verify(rt_token, process.env.REFRESH_TOKEN, (err, user) => {
        if (err)
          return res.status(400).json({ message: "Please login or register" });
        const accessToken = createAccessToken({ id: user._id });
        res.json({ accessToken });
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User dose't exist" });
      }
      const isMatch = await brcypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Login invaild" });
      }

      const accessToken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie(`refreshtoken`, refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });
      res.json({ accessToken, refreshtoken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};
const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: "7d" });
};
module.exports = userCtrl;
