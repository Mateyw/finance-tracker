import db from '../database/db-connect.js';

export const createUser = (username, email, hashedPassword, callback) => {
    const query =
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], callback);
};

export const findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};
