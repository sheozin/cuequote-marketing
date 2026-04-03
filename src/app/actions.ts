"use server";

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

  // TODO: Wire up email list provider (e.g. Loops, Mailchimp) here
  console.log("[Email Subscribe]", { email });

  return {
    success: true,
    message: "You're subscribed! We'll keep you in the loop.",
  };
}
