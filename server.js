// Create a new express application
const express = require("express");
const app = express();
// Import mysql library
const mysql = require("mysql2");
// Import passwort-hashing library bcrypt
const bcrypt = require("bcryptjs");
// Import session library
const session = require("express-session");

app.set("view engine", "ejs");
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middleware to parse JSON data
app.use(express.json());

const PORT = process.env.PORT || 8000;

// Start server on specified port
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});
