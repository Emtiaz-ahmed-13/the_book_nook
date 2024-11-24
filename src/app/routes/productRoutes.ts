import express from 'express';
import {
  createProduct,
  getProductById,
} from '../controllers/productController';

const router = express.Router();

router.post('/', createProduct);

router.get('/:productId', getProductById);

export default router;
