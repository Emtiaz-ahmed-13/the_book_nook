import { Request, Response } from 'express';
import { Product } from '../models/product';

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  const { name, price, quantity, inStock, category, description } = req.body;

  try {
    const newProduct = new Product({
      name,
      price,
      quantity,
      inStock,
      category,
      description,
    });
    await newProduct.save();

    res.status(201).json({
      message: 'Product created successfully',
      status: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      status: false,
    });
  }
};

// Fetch a product by its ID
export const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: 'Product not found', status: false });
    }

    res.status(200).json({
      message: 'Product fetched successfully',
      status: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      status: false,
    });
  }
};
