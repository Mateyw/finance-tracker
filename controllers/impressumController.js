export const getImpressum = (req, res) => {
    return res.render('impressum', {message: null, title: 'Impressum', userId: req.session.userId
    });
};