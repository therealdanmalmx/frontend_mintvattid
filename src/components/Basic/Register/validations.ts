"use server";

import { z } from "zod";

export const schema = z
  .object({
    firstName: z
      .string()
      .min(3, { message: "Förnamnet måste ha minst 3 tecken." }),
    lastName: z.string().min(3, "Efternamnet måste ha minst 3 tecken.").trim(),
    userName: z
      .string()
      .min(6, { message: "Användarnamn måste ha minst 6 tecken" })
      .max(20, { message: "Användarnamnet får ha högst 20 tecken" })
      .trim(),
    email: z.string().email({ message: "Ogiltig e-postadress" }),
    password: z
      .string()
      .min(8, {
        message:
          "Minst 8 tecken (inkl. en versal, 2 nummer och ett specialtecken)",
      })
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Måste inehålla ett specialtecken")
      .regex(/[A-Z]/, "Måste innehålla en versal bokstav")
      .regex(/\d.*\d/, "Måste innehålla minst 2 siffror")
      .trim(),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte",
    path: ["confirmPassword"],
  });

export type FormFields = z.infer<typeof schema>;
