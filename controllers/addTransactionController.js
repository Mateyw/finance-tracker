import {findUserByEmail} from '../models/userModel.js';
import {addTransactionToDb} from '../models/transactionModel.js';

// GET route callback
export const getAddTransaction = (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        return res.status(401).send('Unauthorized');
    }

    return res.render('addTransaction', {message: null});
};

// POST route callback
export const postAddTransaction = async (req, res) => {
    const userId = req.session.userId;

    const {name, amount, category, type, date} = req.body;

    addTransactionToDb(
        userId,
        name,
        amount,
        category,
        type,
        date,
        (err, results) => {
            if (err)
                return res.render('addTransaction', {
                    message: 'Transaction could not be added'
                });

            console.log('Transaction added to database');
            res.redirect('/dashboard');
        }
    );
};
