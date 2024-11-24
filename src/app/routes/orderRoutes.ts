import { Router } from 'express';

import { getProductById } from '../controllers/getProductByIdController';
import { calculateRevenue } from '../controllers/reveneuController';

const router = Router();

router.post('/', getProductById);
router.get('/revenue', calculateRevenue);

export { router as orderRoutes };
