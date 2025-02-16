import express from 'express';
import {getLogin} from '../controllers/loginController.js';
import {loginUser} from '../controllers/loginController.js';

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', loginUser);

export default router;
