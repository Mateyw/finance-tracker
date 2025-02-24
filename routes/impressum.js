import express from 'express';

const router = express.Router();

import {getImpressum} from '../controllers/impressumController.js';

router.get('/impressum', getImpressum);

export default router;