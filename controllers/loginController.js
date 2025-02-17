import bcrypt from 'bcryptjs';
import {findUserByEmail} from '../models/userModel.js';

export const getLogin = (req, res) => {
    return res.render('login', {message: null, userId: req.session.userId});
};

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    // console.log(email, password);

    findUserByEmail(email, async (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(401).render('login', {message: 'User not found'});
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(401)
                .render('login', {message: 'Invalid credentials'});
        }

        // ✅ User-ID in der Session speichern
        req.session.userId = user.id;
        console.log(`User Id saved in session variable 'user.id': `, user.id);

        res.redirect('/dashboard');
    });
};
