import express from 'express';
const router = express.Router();
import {getTransactions} from '../controllers/transactionsController.js';


router.get('/transactions', getTransactions);

export default router;