import db from '../database/db-connect.js';

export const getTransactionsByUserId = (userId, callback) => {
    const query = 'SELECT * FROM transactions WHERE user_id = ?';
    db.query(query, [userId], callback);
};

export const addTransactionToDb = (
    userId,
    name,
    amount,
    category,
    type,
    date,
    state,
    callback
) => {
    const query =
        'INSERT INTO transactions (user_id, name, amount, category, type, date, state) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(
        query,
        [userId, name, amount, category, type, date, state],
        callback
    );
};

// Example of a function to get transactions with filters
export const getTransactionsByFilters = (category, type, fromDate, toDate, callback) => {
    let query = 'SELECT name, amount FROM transactions WHERE 1';
    const queryParams = [];

    if (category && category !== 'all') {
        query += ' AND category = ?';
        queryParams.push(category);
    }
    if (type && type !== 'all') {
        query += ' AND type = ?';
        queryParams.push(type);
    }
    if (fromDate) {
        query += ' AND date >= ?';
        queryParams.push(fromDate);
    }
    if (toDate) {
        query += ' AND date <= ?';
        queryParams.push(toDate);
    }

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return callback(err, []);
        }
        callback(null, results); // Return the results via callback
    });
};
