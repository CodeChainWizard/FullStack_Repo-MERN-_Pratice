const exress = require("express");
const data = require("./data.js");
const app = exress();

app.get("/", (req, res) => {
  res.send("<a href='/api/seachData'><h1>Link for Data</h1></a>");
});

app.get("/api/v1/data", (req, res) => {
  let sortedData = [...data];
  const { search, limit } = req.query;

  if (search) {
    sortedData = sortedData.filter((data) => {
      return data.name.toLowerCase().startsWith(search);
    });
    if (limit) {
      sortedData = sortedData.slice(0, parseInt(limit));
    }
  }
  res.json(sortedData);
});

app.get("/api/seachData", (req, res) => {
  let sortedData = [...data];
  const { search, limit } = req.query;

  if (search) {
    sortedData = sortedData.filter((res) => {
      return res.name.toLowerCase().startsWith(search);
    });
  }
  if (limit) {
    sortedData = sortedData.slice(0, parseInt(limit));
  }
  res.json(sortedData);
});

app.listen(3001, () => {
  console.log("port running is:- ", 3001);
});
