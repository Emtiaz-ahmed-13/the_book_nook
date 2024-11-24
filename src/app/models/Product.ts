import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    price: Number,
    category: String,
    description: String,
    quantity: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model('Product', productSchema);
