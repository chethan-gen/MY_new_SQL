# **Simple Express Server with MySQL Connection Using Environment Variables**

## **Overview**
This project sets up a basic **Express.js server** that connects to a **MySQL database** using **environment variables** for security and flexibility. The server will use **dotenv** for loading environment configurations and **mysql2** for database interactions.

---

## **🚀 Project Setup**
### **1️⃣ Initialize a New Node.js Project**
Run the following command to create a new Node.js project:
```bash
npm init -y
```
This generates a `package.json` file for managing dependencies.

---

### **2️⃣ Environment Configuration**
Create a `.env` file in the root directory and add the following variables:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydatabase
PORT=3000
```
✔ **DB_HOST** → MySQL server address  
✔ **DB_USER** → MySQL username  
✔ **DB_PASSWORD** → MySQL password  
✔ **DB_NAME** → The database name  
✔ **PORT** → The port on which the Express server runs  

💡 **Important:** Never commit your `.env` file to **GitHub** (use `.gitignore` to exclude it).

---

### **3️⃣ Install Required Dependencies**
Run the following command:
```bash
npm install express mysql2 dotenv
```
✔ **express** → Framework for building the web server  
✔ **mysql2** → MySQL driver for Node.js  
✔ **dotenv** → Loads environment variables from `.env` file  

---

### **4️⃣ Create the Server File**
Create a `server.js` file and add the following code:

```javascript
require('dotenv').config(); // Load environment variables
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL Database.");
});

// Basic Route
app.get('/', (req, res) => {
    res.send("Express server is running!");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

---

### **5️⃣ Running the Server**
To start the Express server, run:
```bash
node server.js
```
You should see:
```bash
Server is running on port 3000
Connected to MySQL Database.
```

---

## **📝 Next Steps**
✅ Create API endpoints for querying and modifying MySQL data.  
✅ Use **Express Router** for better route handling.  
✅ Add **error handling & logging** for database operations.  

---

### **📌 Notes**
💡 If using a **remote MySQL database**, update `DB_HOST` in your `.env` file to the **server’s IP or domain** instead of `'localhost'`.
