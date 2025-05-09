require('dotenv').config();
const mysql = require('mysql2');

// Create MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to Database
db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Error:", err.stack);
        return;
    }
    console.log("✅ Connected to MySQL Database.");
});

module.exports = db;
