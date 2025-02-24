import express from 'express';

const router = express.Router();

import {getPolicy} from '../controllers/policyController.js';

router.get('/policy', getPolicy);

export default router;