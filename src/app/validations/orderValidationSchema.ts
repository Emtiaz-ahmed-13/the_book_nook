import { z } from 'zod';

export const orderValidationSchema = z.object({
  userId: z.string({
    required_error: 'User ID is required',
    invalid_type_error: 'User ID must be a string',
  }),
  books: z
    .array(
      z.object({
        bookId: z.string({
          required_error: 'Book ID is required',
          invalid_type_error: 'Book ID must be a string',
        }),
        quantity: z
          .number({
            required_error: 'Quantity is required',
            invalid_type_error: 'Quantity must be a number',
          })
          .min(1, 'Quantity must be at least 1'),
      }),
    )
    .nonempty('At least one book is required'),
});
