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
