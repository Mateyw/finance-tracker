export const getTransactions = (req, res) => {
    return res.render('transactions', {
        title: 'Transactions',
        userId: req.session.userId
    });
}