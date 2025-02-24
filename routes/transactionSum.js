import express from 'express';

const router = express.Router();

import {getSum} from '../controllers/transactionSumController.js';

router.post('/getTransactionSum', getSum);

export default router;