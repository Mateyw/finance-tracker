import db from '../database/db-connect.js';
import bcrypt from 'bcryptjs';

export const createUser = (
    firstName,
    lastName,
    email,
    hashedPassword,
    created,
    callback
) => {
    const query =
        'INSERT INTO users (firstName, lastName, email, password, created) VALUES (?, ?, ?, ?, ?)';
    db.query(
        query,
        [firstName, lastName, email, hashedPassword, created],
        callback
    );
};

export const authenticateUser = (email, password, callback) => {
    findUserByEmail(email, (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.length === 0) {
            return callback(new Error('User not found'));
        }

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                return callback(err);
            }
            if (!isMatch) {
                return callback(new Error('Invalid password'));
            }

            // Passwords match, return the user
            callback(null, user);
        });
    });
};

export const findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
};

export const fetchUserProfile = async (userId) => {
    try {
        const query = `SELECT * FROM users WHERE id = ?`;

        const [results] = await db.promise().query(query, [userId]);

        if (results.length === 0) {
            throw new Error('User not found');
        }

        // Destructuring the first row of the result
        const {firstName, lastName, email, created} = results[0];


        const user = {
            firstName,
            lastName,
            email,
            created
        };
        console.log(user);
        return user;
    } catch (err) {
        throw err;
    }
};
