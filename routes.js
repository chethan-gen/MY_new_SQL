const express = require('express');
const db = require('./config/db');

const router = express.Router();

// 1️⃣ GET All Books
router.get('/', (req, res) => {
    db.query("SELECT * FROM Books", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// 2️⃣ GET Single Book by ID
router.get('/:id', (req, res) => {
    const bookId = req.params.id;
    db.query("SELECT * FROM Books WHERE id = ?", [bookId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Book not found!" });
        res.json(results[0]);
    });
});

// 3️⃣ POST Add New Book
router.post('/', (req, res) => {
    const { title, author, genre, available_copies } = req.body;
    db.query(
        "INSERT INTO Books (title, author, genre, available_copies) VALUES (?, ?, ?, ?)",
        [title, author, genre, available_copies],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Book added successfully!", bookId: results.insertId });
        }
    );
});

// 4️⃣ PUT Update Book by ID
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const { available_copies } = req.body;
    db.query(
        "UPDATE Books SET available_copies = ? WHERE id = ?",
        [available_copies, bookId],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Book updated successfully!" });
        }
    );
});

// 5️⃣ DELETE Remove Book by ID
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;
    db.query("DELETE FROM Books WHERE id = ?", [bookId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Book deleted successfully!" });
    });
});

module.exports = router;
