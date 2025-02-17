export const checkSessionState = (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({
            message: 'Sesson expired. Please login again',
            session: {
                state: 'expired'
            }
        });
    }
};
