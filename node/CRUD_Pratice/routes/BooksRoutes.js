const express = require("express");
const bookController = require("../controller/BooksController");
const routes = express.Router();

routes.get("/", bookController.getBook);
routes.post("/books", bookController.addBook);
routes.put("/books/:id", bookController.updateBooks);
routes.delete("/books/:id", bookController.deletedBook);

module.exports = routes;
