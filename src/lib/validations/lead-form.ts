import { z } from "zod"

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit Indian mobile number",
    }),
  state: z.string().min(1, { message: "Please select your state" }),
  neetScore: z
    .number()
    .min(0, { message: "NEET score cannot be negative" })
    .max(720, { message: "NEET score cannot exceed 720" })
    .optional(),
  consent: z.literal(true, {
    message: "You must agree to be contacted by RK Online",
  }),
})

export const contactFormSchema = leadFormSchema.extend({
  email: z
    .string()
    .email({ message: "Enter a valid email address" }),
  whatsapp: z
    .string()
    .regex(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit Indian mobile number",
    })
    .optional()
    .or(z.literal("")),
  preferredUniversity: z.string().optional(),
  message: z
    .string()
    .max(500, { message: "Message cannot exceed 500 characters" })
    .optional()
    .or(z.literal("")),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>

export type ContactFormValues = z.infer<typeof contactFormSchema>
