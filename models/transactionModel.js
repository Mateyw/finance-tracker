import db from '../database/db-connect.js';

export const getTransactionsByUserId = (userId, callback) => {
    const query = 'SELECT * FROM transactions WHERE user_id = ?';
    db.query(query, [userId], callback);
};
