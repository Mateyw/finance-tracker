export const get404 = (req, res) => {
    return res.status(404).render('404', {title: '404 - Page not found'});
};
