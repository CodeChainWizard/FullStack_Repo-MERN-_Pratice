const express = require("express");
const route = require("express").Router();

// INTERNAL IMPORT
const userCtrl = require("../controller/userCtrl");

route.post("/register", userCtrl.register);
route.post("/login", userCtrl.login);

module.exports = route;
