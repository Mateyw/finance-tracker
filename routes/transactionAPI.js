import express from 'express';
const router = express.Router();

import {getTransactionsAPI} from '../controllers/TransactionAPIController.js'

router.get('/transactions', getTransactionsAPI);

export default router;