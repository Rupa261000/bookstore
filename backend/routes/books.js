// const express = require("express");
// const router = express.Router();
// const Book = require("../models/Book"); // Make sure the model is correct

// // GET all books
// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.find(); // Fetch all books from MongoDB
//     res.status(200).json(books);
//   } catch (err) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Book = require("../models/Book"); // Ensure the Book model is correct

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from MongoDB
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST a new book (Add book)
router.post("/", async (req, res) => {
  try {
    const { title, author, price, category } = req.body;
    if (!title || !author || !price || !category) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBook = new Book({ title, author, price, category });
    await newBook.save();

    res.status(201).json({ message: "Book added successfully!", book: newBook });
  } catch (err) {
    res.status(500).json({ error: "Failed to add book" });
  }
});

// DELETE a book by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
});

module.exports = router;
