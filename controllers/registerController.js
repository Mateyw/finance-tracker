import bcrypt from 'bcryptjs';
import {createUser} from '../models/userModel.js';

export const getRegister = (req, res) => {
    res.render('register');
};

export const registerUser = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(username, email, hashedPassword, (err, result) => {
        if (err) throw err;
        res.redirect('/login');
    });
};
