import express from 'express';

const router = express.Router();

import {getTermsAndConditions} from '../controllers/termsAndConditionsController.js';

router.get('/terms-and-conditions', getTermsAndConditions);

export default router;