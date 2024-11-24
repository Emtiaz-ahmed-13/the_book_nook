// import { Request, Response } from 'express';
// import { Book } from '../models/Book';
// import { Order } from '../models/order';
// import { createOrderSchema } from '../validations/orderValidationSchema';

// export const createOrder = async (req: Request, res: Response) => {
//   try {
//     // Validate request body
//     const validatedData = createOrderSchema.parse(req.body);
//     const { email, product: bookId, quantity } = validatedData;

//     // Check if the book exists
//     const existingBook = await Book.findById(bookId);

//     if (!existingBook) {
//       return res.status(404).json({
//         message: 'Book not found',
//         status: false,
//       });
//     }

//     console.log('Book ID:', bookId);
//     console.log('Existing Book:', existingBook);

//     // Check if there is enough stock
//     if (existingBook.quantity < quantity) {
//       return res.status(400).json({
//         message: 'Insufficient stock',
//         status: false,
//       });
//     }

//     // Create the order
//     const order = await Order.create({
//       email,
//       product: bookId,
//       quantity,
//       totalPrice: existingBook.price * quantity, // Calculate total price based on book price
//     });

//     // Log the created order for debugging
//     console.log('Order Created:', order);

//     // Update the book inventory
//     existingBook.quantity -= quantity;
//     if (existingBook.quantity === 0) {
//       existingBook.inStock = false;
//     }
//     await existingBook.save();

//     // Respond with success message and order details
//     res.status(201).json({
//       message: 'Order created successfully',
//       status: true,
//       data: {
//         _id: order._id.toString(),
//         email: order.email,
//         product: order.product,
//         quantity: order.quantity,
//         totalPrice: order.totalPrice,
//         createdAt: order.createdAt,
//         updatedAt: order.updatedAt,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: error instanceof Error ? error.message : 'Internal server error',
//       status: false,
//     });
//   }
// };
