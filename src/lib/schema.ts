import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Enter your name'),
  email: z
    .string()
    .min(1, 'Enter your email address')
    .email('Enter a valid email address'),
  address: z.string().min(1, 'Enter your address'),
});
