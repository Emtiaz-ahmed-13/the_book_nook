import express from 'express';
import { calculateRevenue, createOrder } from '../controllers/orderController';

const router = express.Router();

// Route to create an order
router.post('/', createOrder);

// Route to calculate revenue
router.get('/revenue', calculateRevenue);

export const orderRoutes = router;
