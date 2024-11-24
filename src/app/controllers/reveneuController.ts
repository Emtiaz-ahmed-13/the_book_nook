// import { Request, Response } from 'express';
// import { Order } from '../models/order';

// export const calculateRevenue = async (req: Request, res: Response) => {
//   try {
//     // Aggregate orders to compute total revenue
//     const revenue = await Order.aggregate([
//       {
//         $lookup: {
//           from: 'products',
//           localField: 'product',
//           foreignField: '_id',
//           as: 'productDetails',
//         },
//       },
//       {
//         $unwind: '$productDetails',
//       },
//       {
//         $group: {
//           _id: null,
//           totalRevenue: {
//             $sum: { $multiply: ['$quantity', '$productDetails.price'] },
//           },
//         },
//       },
//     ]);

//     res.status(200).json({
//       message: 'Revenue calculated successfully',
//       status: true,
//       data: {
//         totalRevenue: revenue[0]?.totalRevenue || 0,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Internal server error',
//       status: false,
//     });
//   }
// };
