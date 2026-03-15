import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address").max(254, "Email is too long"),
  phone: z.string().max(30, "Phone number is too long").optional().default(""),
  eventType: z.string().max(100, "Event type is too long").optional().default(""),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message is too long")
    .refine(
      (val) => val.trim().split(/\s+/).filter(Boolean).length >= 10,
      "Message must be at least 10 words"
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;
