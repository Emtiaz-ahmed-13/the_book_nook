import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
