export const getLogout = (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
        res.redirect('/login');
    } else {
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res
                    .status(500)
                    .send('Could not log out, please try again.');
            }

            // Clear session cookie
            res.clearCookie('connect.sid'); // Default session cookie name
            console.log(req.session);
            res.redirect('/login'); // Redirect to login page
        });
    }
};
