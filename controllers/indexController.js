export const getIndex = (req, res) => {
    // Check if user is logged in by checking if session variable userid exists
    if (req.session.userid) {
        res.redirect('dashboard');
    }
    // Redirect to login page if user is not logged in
    res.redirect('login');
};
