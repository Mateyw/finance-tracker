import { fetchUserProfile } from '../models/userModel.js';

export const getProfile = async (req, res) => {
    // Check if user is logged in
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    try {
        const user = await fetchUserProfile(req.session.userId);

        if (!user) {
            return res.status(404).send('User not found');
        }

        const { firstName, lastName, email, created } = user;

        const fullName = `${firstName} ${lastName}`;

        const formattedCreatedDate = new Date(created).toLocaleDateString(
            'en-GB',
            { timeZone: 'Europe/Berlin' }
        );

        return res.render('profile', {
            title: 'Profile',
            userId: req.session.userId,
            fullName,
            email,
            created: formattedCreatedDate
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server error');
    }
};
