import {authenticateUser} from '../models/userModel.js';

// rendert die login seite
export const getLogin = (req, res) => {

    const successMessage = req.flash('success');

    return res.render('login', {
        message: successMessage,
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
        // req.session.customName = table.primarykey
        req.session.userId = user.id;
        console.log(`User Id saved in session variable 'user.id': `, user.id);
        console.log(`Req.session: `, req.session);


        res.redirect('/dashboard');
    });
};
