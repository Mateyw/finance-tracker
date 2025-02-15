import {getTransactionsByUserId} from '../models/transactionModel.js';

export const getDashboard = (req, res) => {
    const userId = req.session.userId;

    getTransactionsByUserId(userId, (err, transactions) => {
        if (err) throw err;
        res.render('dashboard', {transactions});
    });
};
