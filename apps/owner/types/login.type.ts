import { z } from 'zod';

export const LoginFormInputSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Email is required',
    })
    .min(4, {
      message: 'Must be 4 or more characters long',
    }),
});
export type ILoginFormInput = z.infer<typeof LoginFormInputSchema>;
