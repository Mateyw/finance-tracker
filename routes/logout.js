import express from 'express';
const router = express.Router();
import {getLogout} from '../controllers/logoutController.js';

// Logout route
router.get('/logout', getLogout);

export default router;
