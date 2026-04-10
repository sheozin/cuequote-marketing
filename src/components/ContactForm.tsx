"use client";

import { useActionState, useRef, useEffect } from "react";
import { submitContactForm, type ContactFormState } from "../app/contact/actions";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {state && (
        <div
          style={{
            padding: "12px 16px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            background: state.success ? "#ecfdf5" : "#fef2f2",
            color: state.success ? "#065f46" : "#991b1b",
            border: `1px solid ${state.success ? "#a7f3d0" : "#fecaca"}`,
          }}
        >
          {state.success ? t("success") : (state.message || t("error"))}
        </div>
      )}

      <div>
        <label
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          {t("nameLabel")}
        </label>
        <input
          type="text"
          name="name"
          placeholder={t("namePlaceholder")}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #d1d5db",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div>
        <label
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          {t("emailLabel")}
        </label>
        <input
          type="email"
          name="email"
          placeholder={t("emailPlaceholder")}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #d1d5db",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div>
        <label
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          {t("subjectLabel")}
        </label>
        <select
          name="subject"
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #d1d5db",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          <option value="">{t("selectTopic")}</option>
          <option value="general">{t("optGeneral")}</option>
          <option value="support">{t("optSupport")}</option>
          <option value="sales">{t("optSales")}</option>
          <option value="partnership">{t("optPartnership")}</option>
          <option value="feedback">{t("optFeedback")}</option>
        </select>
      </div>

      <div>
        <label
          style={{
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          {t("messageLabel")}
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder={t("messagePlaceholder")}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 10,
            border: "1px solid #d1d5db",
            fontSize: 15,
            outline: "none",
            fontFamily: "inherit",
            resize: "vertical",
            boxSizing: "border-box",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        style={{
          background: isPending ? "#6ee7b7" : "#10b981",
          color: "#fff",
          padding: "14px 28px",
          borderRadius: 10,
          fontWeight: 600,
          fontSize: 16,
          border: "none",
          cursor: isPending ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          opacity: isPending ? 0.7 : 1,
          transition: "opacity 0.2s",
        }}
      >
        {isPending ? t("sending") : t("send")}
      </button>
    </form>
  );
}
