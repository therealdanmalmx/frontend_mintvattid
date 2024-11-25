"use server";

import { z } from "zod";

const schema = z
  .object({
    firstName: z.string().min(2, "Förnamnet måste ha minst 2 tecken."),
    lastName: z.string().min(2, "Efternamnet måste ha minst 2 tecken."),
    username: z
      .string()
      .min(3, "Användarnamnet måste ha minst 3 tecken")
      .max(20, "Användarnamnet får ha högst 20 tecken"),
    email: z.string().email("Ogiltig e-postadress"),
    password: z.string().min(8, "Lösenordet måste ha minst 8 tecken"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte",
    path: ["confirmPassword"],
  });

export async function registerUser(
  prevState: Record<string, unknown>,
  formData: FormData,
) {
  const validatedFields = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  // Here you would typically save the user to your database
  // For this example, we'll just simulate a successful registration
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

  return { success: "Registration successful! You can now log in." };
}
