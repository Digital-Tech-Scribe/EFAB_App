import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[\d\s-]+$/, 'Invalid phone number')
    .min(10, 'Phone number must be at least 10 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must not exceed 500 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;