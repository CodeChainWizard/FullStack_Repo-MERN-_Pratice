const express = require("express");
const app = express();
const path = require("path");

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World!</h1>");
// });

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});

app.get("/data", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/jsonData", (req, res) => {
  res.json([
    {
      firstname: "Danecha",
      lastname: "Shubham",
      age: 20,
    },
    {
      firstname: "Code",
      lastname: "Wizard",
      age: 20,
    },
  ]);
});

// Send whole site.... on chrome
app.use(express.static("Projext3_JS_Inter_Search_Filter"));

app.listen(3001, () => {
  console.log("Port running...", 3001);
});
