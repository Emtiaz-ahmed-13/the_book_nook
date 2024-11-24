import { Router } from 'express';

import { createOrder } from '../controllers/orderController';
import { calculateRevenue } from '../controllers/reveneuController';

const router = Router();

router.post('/', createOrder);
router.get('/revenue', calculateRevenue);

export { router as orderRoutes };
