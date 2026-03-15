import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional().default(""),
  eventType: z.string().optional().default(""),
  message: z
    .string()
    .min(1, "Message is required")
    .refine(
      (val) => val.trim().split(/\s+/).filter(Boolean).length >= 10,
      "Message must be at least 10 words"
    ),
});

export type ContactFormData = z.infer<typeof contactSchema>;
