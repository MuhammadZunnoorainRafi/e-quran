'use server';

import { formSchema } from '@/lib/schema';

export type FormState = {
  errors: {
    name?: string[];
    email?: string[];
    address?: string[];
  };
};

export const formAction = async (formState: FormState, formData: FormData) => {
  const validation = formSchema.safeParse(Object.fromEntries(formData));

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { name, email, address } = validation.data;
};
