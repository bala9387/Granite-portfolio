import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name (minimum 2 characters)"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().min(7, "Please enter a valid contact phone number"),
  company: z.string().optional(),
  productOfInterest: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, "Please provide more details regarding your inquiry (min 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.enum([
    "residential",
    "commercial",
    "hospitality",
    "outdoor",
    "architectural",
    "other",
  ], {
    required_error: "Please select a project type",
  }),
  graniteRequired: z.string().min(1, "Please select or specify the granite variety"),
  quantity: z.string().min(1, "Please estimate your quantity or area (e.g., 500 sq. ft. or 100 sq. m)"),
  preferredSize: z.string().min(1, "Please select or specify your preferred tile size"),
  preferredFinish: z.string().min(1, "Please select your preferred surface finish"),
  deliveryLocation: z.string().min(2, "Please provide your project or delivery city / location"),
  additionalRequirements: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
