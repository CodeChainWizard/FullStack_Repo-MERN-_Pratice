const express = require("express");
const routes = require("./routes/BooksRoutes");
const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
  console.log("Port running on:- ", 3000);
});
