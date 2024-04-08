const express = require("express");
const bookController = require("../controller/BookController");

const router = express.Router();

router.get("/", bookController.getBooks);
router.post("/books", bookController.addBooks);
router.put("/books/:id", bookController.updatedBook);
router.delete("/books/:id", bookController.deletedBook);

module.exports = router;
