import express from 'express';
import {registerUser} from '../controllers/registerController.js';
import {getRegister} from '../controllers/registerController.js';

const router = express.Router();

router.get('/register', getRegister);
router.post('/register', registerUser);

export default router;
