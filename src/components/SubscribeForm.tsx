"use client";

import { useActionState } from "react";
import { subscribeEmail, type SubscribeFormState } from "../app/actions";

export default function SubscribeForm() {
  const [state, formAction, isPending] = useActionState<SubscribeFormState, FormData>(
    subscribeEmail,
    null
  );

  return (
    <div>
      {state?.success ? (
        <div
          style={{
            padding: "12px 16px",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            background: "#ecfdf5",
            color: "#065f46",
            border: "1px solid #a7f3d0",
            maxWidth: 420,
            margin: "0 auto",
          }}
        >
          {state.message}
        </div>
      ) : (
        <>
          <form
            action={formAction}
            style={{ display: "flex", gap: 8, maxWidth: 420, margin: "0 auto" }}
            className="email-form"
          >
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              required
              style={{
                flex: 1,
                padding: "12px 16px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={isPending}
              style={{
                background: isPending ? "#6ee7b7" : "#10b981",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                border: "none",
                cursor: isPending ? "not-allowed" : "pointer",
                opacity: isPending ? 0.7 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {isPending ? "..." : "Subscribe"}
            </button>
          </form>
          {state && !state.success && (
            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                color: "#991b1b",
                maxWidth: 420,
                margin: "8px auto 0",
              }}
            >
              {state.message}
            </div>
          )}
        </>
      )}
    </div>
  );
}
