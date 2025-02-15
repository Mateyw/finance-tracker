import bcrypt from 'bcryptjs';
import {findUserByEmail} from '../models/userModel.js';

export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    findUserByEmail(email, async (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(401).send('User not found');
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        req.session.userId = user.id;
        res.redirect('/dashboard');
    });
};
