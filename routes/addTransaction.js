import express from 'express';
import {getAddTransaction} from '../controllers/addTransactionController.js';
import {postAddTransaction} from '../controllers/addTransactionController.js';

const router = express.Router();

router.get('/add-transaction', getAddTransaction);
router.post('/add-transaction', postAddTransaction);

export default router;
