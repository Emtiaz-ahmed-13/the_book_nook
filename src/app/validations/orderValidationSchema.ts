import { z } from 'zod';
export const createOrderSchema = z.object({
  email: z.string().email(),
  product: z.string().regex(/^[0-9a-fA-F]{24}$/),
  quantity: z.number().int().positive(),
  totalPrice: z.number().int().positive(),
});
