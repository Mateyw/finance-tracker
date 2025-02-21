export const getPolicy = (req, res) => {
    return res.render('policy', {message: null, title: 'Policy', userId: req.session.userId
    });
};