import { Schema, model } from 'mongoose';
import { TOrder } from '../types/order';

const orderSchema = new Schema<TOrder>(
  {
    userId: { type: String, required: true },
    books: [
      {
        bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

export const Order = model<TOrder>('Order', orderSchema);
