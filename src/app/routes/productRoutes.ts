import express from 'express';
import { getProductById } from '../controllers/getProductByIdController';

const router = express.Router();

router.get('/:productId', getProductById);

export default router;
