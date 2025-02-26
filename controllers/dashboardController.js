import { getTransactionsByUserId, getTransactionsByFilters } from '../models/transactionModel.js';
import { getCategoryDropdown, getTypeDropdown } from '../models/dashboardModel.js';

export const getDashboard = (req, res) => {
    const userId = req.session.userId;

    if (!userId) {
        req.session.message = 'Please log in to view this page';
        return res.status(401).redirect('/login');
    }

    // Handle AJAX request for bar chart updates
    if (req.xhr || req.headers.accept.includes('json')) {
        getTransactionsByFilters(req.query.category, req.query.type, req.query.fromDate, req.query.toDate, (err, transactions) => {
            if (err) {
                console.error('Error fetching filtered data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            const labels = transactions.map(t => t.name);
            const values = transactions.map(t => t.amount);

            return res.json({ labels, values }); // Send JSON for AJAX
        });
        return; // Ensure the function exits after responding with JSON
    }

    // If not an AJAX request, render the full dashboard page
    getTransactionsByUserId(userId, (err, transactions) => {
        if (err) {
            console.error('Error fetching transactions:', err);
            return res.status(500).send('Internal Server Error');
        }

        getCategoryDropdown((err, categories) => {
            if (err) {
                console.error('Error fetching categories:', err);
                return res.status(500).send('Internal Server Error');
            }

            getTypeDropdown((err, types) => {
                if (err) {
                    console.error('Error fetching types:', err);
                    return res.status(500).send('Internal Server Error');
                }

                // Render the full dashboard page
                return res.render('dashboard', { 
                    transactions, 
                    categories, 
                    types, 
                    userId, 
                    title: 'Dashboard' 
                });
            });
        });
    });
};
