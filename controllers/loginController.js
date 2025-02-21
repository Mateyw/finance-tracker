import {authenticateUser} from '../models/userModel.js';

export const getLogin = (req, res) => {
    return res.render('login', {
        message: null,
        userId: req.session.userId,
        title: 'Login'
    });
};

export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    authenticateUser(email, password, (err, user) => {
        if (err) {
            return res.status(401).render('login', {
                message: err.message,
                userId: req.session.userId,
                title: 'Login'
            });
        }

        // ✅ User-ID in der Session speichern
        req.session.userId = user.id;
        console.log(`User Id saved in session variable 'user.id': `, user.id);

        res.redirect('/dashboard');
    });
};
