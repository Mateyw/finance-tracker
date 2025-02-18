export const getProfile = async (req, res) => {
    // Check if user is logged in
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    return res.render('profile', {
        title: 'Profile',
        userId: req.session.userId
    });
};
