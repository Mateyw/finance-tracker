import bcrypt from 'bcryptjs';
import {createUser} from '../models/userModel.js';

export const getRegister = (req, res) => {
    return res.render('register', {
        message: null,
        userId: req.session.userId,
        title: 'Register'
    });
};

export const registerUser = async (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;

    const date = new Date();

    const created = `${date.getFullYear()}-${
        date.getMonth() + 1
    }-${date.getDate()}`;

    if (password !== confirmPassword) {
        return res.render('register', {
            message: 'Passwords do not match'
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(
        firstName,
        lastName,
        email,
        hashedPassword,
        created,
        (err, result) => {
            if (err) {
                return res.render('register', {
                    message: 'Database error occurred!'
                });
            }
            res.redirect('/login');
        }
    );
};
