import { Request, Response } from 'express';
import { Book } from '../models/Book';

export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    // Aggregate orders to compute total revenue
    const revenue = await Book.aggregate([
      {
        $match: {
          quantity: { $gt: 0 },
          price: { $gt: 0 },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ['$quantity', '$price'] } },
        },
      },
    ]);

    console.log('Revenue:', revenue);

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: revenue[0]?.totalRevenue || 0,
      },
    });
  } catch (error) {
    console.error('Error calculating revenue:', error);
    res.status(500).json({
      message: 'Internal server error',
      status: false,
    });
  }
};
