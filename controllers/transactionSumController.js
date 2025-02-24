import db from '../database/db-connect.js';

export const getSum = (req, res) => {
    const { userId, category, month, year, type } = req.body;
  
    const query = `
      SELECT SUM(amount) AS sum
      FROM transactions
      WHERE user_id = ? AND category = ? AND MONTH(date) = ? AND YEAR(date) = ? AND type = ?;
    `;
  
    db.query(query, [userId, category, month, year, type], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database query error' });
      }
  
      const sum = results[0].amount || 0; // Handle case where sum is null
      res.json({ sum });
    });
  }