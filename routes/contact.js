import express from 'express';

const router = express.Router();

import {getContact, sendEmail} from '../controllers/contactController.js';

router.get('/contact', getContact);
router.post('/send-email', sendEmail);

export default router;