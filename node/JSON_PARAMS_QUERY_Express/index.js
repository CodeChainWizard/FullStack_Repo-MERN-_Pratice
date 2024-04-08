const express = require("express");
const data = require("./data.js");

const app = express();

app.get("/api/json", (req, res) => {
  const newData = data.map((res) => {
    const { name } = res;
    return name;
  });
  res.json(newData);
});

app.get("/", (req, res) => {
  res.send("<a href='/api/json'><h1>Link For Data</h1></a>");
});

app.get("/api/singleData/:data_id", (req, res) => {
  const { data_id } = req.params;
  const sigleData = data.find((item) => item.id === Number(data_id));
  if (!sigleData) {
    res.status(404).send("Data not Found");
  }
  res.json(sigleData);
});

app.listen(3001, () => {
  console.log("Port is running on 3001");
});
