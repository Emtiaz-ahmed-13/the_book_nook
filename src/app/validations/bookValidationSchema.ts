import { z } from 'zod';

export const bookValidationSchema = z.object({
  title: z.string({
    required_error: 'Title is required',
    invalid_type_error: 'Title must be a string',
  }),
  author: z.string({
    required_error: 'Author is required',
    invalid_type_error: 'Author must be a string',
  }),
  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),
  category: z.enum(
    ['Fiction', 'Non-fiction', 'Science', 'Romance', 'Mystery'],
    {
      required_error: 'Category is required',
      invalid_type_error: 'Invalid category',
    },
  ),
  description: z.string().optional(),
  quantity: z.number({
    required_error: 'Quantity is required',
    invalid_type_error: 'Quantity must be a number',
  }),
  inStock: z.boolean({
    required_error: 'Stock status is required',
    invalid_type_error: 'Stock status must be a boolean',
  }),
});
