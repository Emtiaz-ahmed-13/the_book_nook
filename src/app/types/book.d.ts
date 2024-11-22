import { BookCategory } from '../models/Book';

export type BookCategory =
  | 'Fiction'
  | 'Non-fiction'
  | 'Science'
  | 'Romance'
  | 'Mystery';

export type TBook = {
  title: string;
  author: string;
  price: number;
  category: BookCategory;
  description?: string;
  quantity: number;
  inStock: boolean;
};

export interface CreateBookRequest {
  title: string;
  author: string;
  price: number;
  category: BookCategory;
  description?: string;
  quantity: number;
  inStock: boolean;
}

export interface BookResponse<TBook = Record<string>> {
  message: string;
  success: boolean;
  data: TBook & {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface GenericeErrorResponse {
  message: string;
  success: false;
  stack?: string;
}
