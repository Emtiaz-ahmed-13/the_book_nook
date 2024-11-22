import { Schema, model } from 'mongoose';
import { TBook } from '../types/book';

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Fiction', 'Non-fiction', 'Science', 'Romance', 'Mystery'],
    },
    description: { type: String },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true, default: true },
  },
  { timestamps: true },
);

export const Book = model<TBook>('Book', bookSchema);
