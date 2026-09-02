"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { isRateLimited } from "@/lib/rate-limit";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot bot protection — if filled, silently succeed
  const honeypot = formData.get("company_url")?.toString() ?? "";
  if (honeypot) {
    return { success: true, message: "Thanks for reaching out!" };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name) {
    return { success: false, message: "Please enter your name." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (!message) {
    return { success: false, message: "Please enter a message." };
  }

  // Rate limit: 5 contact submissions per IP per hour
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`contact:${ip}`, 5, 60 * 60 * 1000)) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  try {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      subject: subject || null,
      message,
    });

    if (error) {
      console.error("[Contact Form Error]", error);
      return { success: false, message: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("[Contact Form Error]", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you within 24 hours.",
  };
}
