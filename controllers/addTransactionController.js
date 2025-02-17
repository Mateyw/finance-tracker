import {addTransactionToDb} from '../models/transactionModel.js';

// GET route callback
export const getAddTransaction = (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).send('Unauthorized');
    }

    return res.render('addTransaction', {
        message: null,
        userId: req.session.userId
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
                    message: 'Transaction could not be added',
                    userId: req.session.userId
                });

            console.log('Transaction added to database');
            res.redirect('/dashboard');
        }
    );
};
