import express from 'express';
import {get404} from '../controllers/errorController.js';

const router = express.Router();

router.use(get404);

export default router;
