export const getTermsAndConditions = (req, res) => {
    return res.render('termsandconditions', {message: null, title: 'Terms and Conditions', userId: req.session.userId
    });
};