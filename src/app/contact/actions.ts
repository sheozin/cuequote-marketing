"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

  // TODO: Wire up email service (e.g. Resend, SendGrid) here
  console.log("[Contact Form Submission]", { name, email, subject, message });

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you within 24 hours.",
  };
}
