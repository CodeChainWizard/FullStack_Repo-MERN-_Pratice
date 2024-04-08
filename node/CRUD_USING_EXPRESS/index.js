const express = require("express");
const router = require("./routes/BookRoutes");
const app = express();

app.use(express.json());
app.use("/", router);

// let book = [
//   {
//     id: 1,
//     title: "Book1",
//     author: "Book1 Author",
//   },
//   {
//     id: 2,
//     title: "Book1",
//     author: "Book2 Author",
//   },
//   {
//     id: 3,
//     title: "Book3",
//     author: "Book3 Author",
//   },
//   {
//     id: 4,
//     title: "Book4",
//     author: "Book4 Author",
//   },
//   {
//     id: 5,
//     title: "Book5",
//     author: "Book5 Author",
//   },
// ];

// //------- Read Json Data
// app.get("/", (req, res) => {
//   res.json(book);
// });

// //-------- Add new Data
// app.use(express.json());
// app.post("/books", (req, res) => {
//   const newBook = req.body;
//   newBook.id = book.length + 1;
//   book.push(newBook);
//   res.status(201).json(newBook);
// });

// //---------- Update JSON Data
// app.put("/books/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedBook = req.body;
//   const index = book.findIndex((item) => item.id === id);

//   if (index !== -1) {
//     book[index] = { ...book[index], ...updatedBook };
//     res.json(book[index]);
//   } else {
//     res.status(404).json("The Book with the given ID was not found.");
//   }
// });

// //--------- Delete the Json Data
// app.delete("/books/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = book.findIndex((item) => item.id === id);

//   if (index !== -1) {
//     const deleted = book[index];
//     book.slice(index, 1);
//     res.json(deleted);
//   } else {
//     res.status(404).json({ error: "This book does not exist" });
//   }
// });

app.listen(3001, () => {
  console.log("Port Running is:- ", 3001);
});
