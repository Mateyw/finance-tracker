export const getIndex = (req, res) => {
    // If user is not logged in, render login page
    if (!req.session.userId) {
        return res.render('login', {
            title: 'Login',
            userId: req.session.userId
        });
    }
    // Render Dashbaord (Index) page if user is logged in
    return res.render('dashboard', {
        title: 'Dashboard',
        userId: req.session.userId
    });
};
