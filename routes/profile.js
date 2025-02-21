import express from 'express';
const router = express.Router();
import {getProfile} from '../controllers/profileController.js';

router.get('/profile', getProfile);

export default router;
