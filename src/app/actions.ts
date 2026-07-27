"use server";

import { headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { isRateLimited } from "@/lib/rate-limit";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export type SubscribeFormState = {
  success: boolean;
  message: string;
} | null;

export async function subscribeEmail(
  _prevState: SubscribeFormState,
  formData: FormData
): Promise<SubscribeFormState> {
  const email = formData.get("email")?.toString().trim() ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Rate limit: 3 subscribe attempts per IP per 10 minutes
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(`subscribe:${ip}`, 3, 10 * 60 * 1000)) {
    return { success: false, message: "Too many requests. Please try again later." };
  }

  try {
    const { error } = await supabase.from("newsletter_subscribers").insert({ email });

    if (error) {
      // Unique constraint violation = already subscribed
      if (error.code === "23505") {
        return { success: true, message: "You're already subscribed!" };
      }
      console.error("[Subscribe Error]", error);
      return { success: false, message: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("[Subscribe Error]", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }

  return {
    success: true,
    message: "You're subscribed! We'll keep you in the loop.",
  };
}
