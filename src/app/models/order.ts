import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Order = mongoose.model('Order', orderSchema);
