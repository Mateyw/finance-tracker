DROP DATABASE IF EXISTS finance_tracker;

CREATE DATABASE IF NOT EXISTS finance_tracker;

USE finance_tracker;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category ENUM('Food', 'Bills', 'Rent', 'Commuting Expenses', 'Clothes', 'Tech', 'Other') NOT NULL,
    type ENUM('Income', 'Expense') NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
