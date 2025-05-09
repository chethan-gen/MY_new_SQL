require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(morgan('dev')); // Logs requests for debugging

// Routes
app.use('/books', router);

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
