import db from '../database/db-connect.js';

export const getCategoryDropdown = (callback) => {
    const query = 'SELECT name FROM categories';
    db.query(query, callback);
};

export const getTypeDropdown = (callback) => {
    const query = 'SELECT type FROM types';
    db.query(query, callback);
};

