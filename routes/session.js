import express from 'express';

const router = express.Router();

import {checkSessionState} from '../controllers/sessionController.js';

router.get('/check-session-state', checkSessionState);

export default router;
