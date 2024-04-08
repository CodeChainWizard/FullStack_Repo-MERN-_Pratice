let books = [
  {
    id: 1,
    title: "Book1",
    author: "Book1 Author",
  },
  {
    id: 2,
    title: "Book2",
    author: "Book2 Author",
  },
];

const getBook = (req, res) => {
  return res.json(books);
};

const addBook = (req, res) => {
  const addNewBook = req.body;
  addNewBook.id = books.length + 1;
  books.push(addNewBook);
  return res.status(201).send({ book: books });
};

const updateBooks = (req, res) => {
  const id = parseInt(req.params.id);
  const updateBook = req.body;
  const index = books.map((item) => item.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updateBook };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "Book id not found" });
  }
};

const deletedBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.map((item) => item.id === id);
  if (index !== -1) {
    // const deleted = books[index];
    const data = books.slice(index, 1);
    res.json(data);
  } else {
    res.status(404).json({ error: "This book id not found" });
  }
};

module.exports = { getBook, addBook, updateBooks, deletedBook };
