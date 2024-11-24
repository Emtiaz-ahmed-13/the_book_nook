import { Request, Response } from 'express';

import { Order } from '../models/order';
import { Product } from '../models/Product';

// Create an Order
export const createOrder = async (req: Request, res: Response) => {
  const { email, product, quantity, totalPrice } = req.body;

  try {
    // Check if the product exists
    const existingProduct = await Product.findById(product);

    if (!existingProduct) {
      return res
        .status(404)
        .json({ message: 'Product not found', status: false });
    }

    // Check if there is enough stock
    if (existingProduct.quantity < quantity) {
      return res
        .status(400)
        .json({ message: 'Insufficient stock', status: false });
    }

    // Create the order
    const order = await Order.create({ email, product, quantity, totalPrice });

    // Update the product inventory
    existingProduct.quantity -= quantity;
    if (existingProduct.quantity === 0) {
      existingProduct.inStock = false;
    }
    await existingProduct.save();

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: false });
  }
};

// Calculate Revenue
export const calculateRevenue = async (_req: Request, res: Response) => {
  try {
    const revenue = await Order.aggregate([
      {
        $lookup: {
          from: 'products',
          localField: 'product',
          foreignField: '_id',
          as: 'productDetails',
        },
      },
      {
        $unwind: '$productDetails',
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: { $multiply: ['$quantity', '$productDetails.price'] },
          },
        },
      },
    ]);

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue: revenue[0]?.totalRevenue || 0 },
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: false });
  }
};
