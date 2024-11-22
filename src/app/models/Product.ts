import { Document, model, Schema } from 'mongoose';

interface Product extends Document {
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
  inStock: { type: Boolean, default: true },
});

const Product = model<Product>('Product', productSchema);

export { Product };
