import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const OrderSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Order = mongoose.model<IOrder>('Order', OrderSchema);