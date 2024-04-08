let book = [
  {
    id: 1,
    title: "Book1",
    author: "Book1 Author",
  },
  {
    id: 2,
    title: "Book1",
    author: "Book2 Author",
  },
  {
    id: 3,
    title: "Book3",
    author: "Book3 Author",
  },
  {
    id: 4,
    title: "Book4",
    author: "Book4 Author",
  },
  {
    id: 5,
    title: "Book5",
    author: "Book5 Author",
  },
];

const getBooks = (req, res) => {
  res.json(book);
};

const addBooks = (req, res) => {
  let newBook = req.body;
  newBook.id = book.length + 1;
  book.push(newBook);
  res.json(newBook);
};

const updatedBook = (req, res) => {
  let id = parseInt(req.params.id);
  let updateBoodk = req.body;
  const index = book.map((item) => item.id === id);
  if (index !== -1) {
    book[index] = { ...book[index], ...updateBoodk };
    res.json(book[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
};

const deletedBook = (req, res) => {
  const id = req.params.id;
  const index = book.map((item) => item.id === id);

  if (index !== -1) {
    const deleted = book[index];
    book.slice(index, 1);
    res.json(deleted);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
};

module.exports = { getBooks, addBooks, updatedBook, deletedBook };
