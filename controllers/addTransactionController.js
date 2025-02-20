import {addTransactionToDb} from '../models/transactionModel.js';

// GET route callback
export const getAddTransaction = (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        req.session.message = 'Please log in to view this page';
        return res.status(401).redirect('/login');
    }

    return res.render('addTransaction', {
        message: null,
        userId: req.session.userId,
        title: 'Add Transaction'
    });
};

// POST route callback
export const postAddTransaction = async (req, res) => {
    const userId = req.session.userId;
    const state = 'active';

    const {name, amount, category, type, date} = req.body;

    addTransactionToDb(
        userId,
        name,
        amount,
        category,
        type,
        date,
        state,
        (err, results) => {
            if (err)
                return res.render('addTransaction', {
                    message: err.message,
                    userId: req.session.userId, 
                    title: 'Add Transaction'
                });

            console.log('Transaction added to database');
            res.redirect('/dashboard');
        }
    );
};
