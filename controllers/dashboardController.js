import {getTransactionsByUserId} from '../models/transactionModel.js';

export const getDashboard = (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        req.session.message = 'Please log in to view this page';
        return res.status(401).redirect('/login');
    }

    getTransactionsByUserId(userId, (err, transactions) => {
        if (err) throw err;
        return res.render('dashboard', {
            transactions,
            userId: req.session.userId,
            title: 'Dashboard'
        });
    });
};
