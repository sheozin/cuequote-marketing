import type { Metadata } from "next";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import ContactForm from "../../../components/ContactForm";
import { Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact");
  const title = t("metaTitle", { defaultValue: "Contact" });
  const description = t("metaDescription", { defaultValue: "Get in touch with the CueQuote team. We'd love to hear from you — whether you have a question, feedback, or want to explore a partnership." });
  return {
    title,
    description,
    alternates: { canonical: "/contact" },
    openGraph: { title, description },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const t = await getTranslations("contact");

  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{
        padding: "100px 24px 60px",
        background: "linear-gradient(180deg, #f0fdf4 0%, #fff 100%)",
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", border: "1px solid rgba(16,185,129,0.15)", padding: "6px 14px", borderRadius: 20, marginBottom: 20,
          }}>
            <Sparkles size={14} /> {t("badge")}
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 14, lineHeight: 1.15, letterSpacing: -1 }}>
            {t("heading")}
          </h1>
          <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 0, maxWidth: 560, lineHeight: 1.6 }}>
            {t("headingSubtitle")}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: "64px 24px 96px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <style>{`
            .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
            @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }
          `}</style>
          <div className="contact-grid">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 8 }}>
              <div style={{
                background: "#f9fafb", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb",
              }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 20 }}>
                  {t("detailsTitle")}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={16} style={{ color: "#10b981" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{t("emailLabel")}</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>hello@cuequote.com</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={16} style={{ color: "#10b981" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{t("location")}</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>{t("locationValue")}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={16} style={{ color: "#10b981" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>{t("responseTime")}</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>{t("responseTimeValue")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: "linear-gradient(135deg, #08172E 0%, #0f2847 100%)",
                borderRadius: 16, padding: 32, color: "#fff",
              }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>
                  {t("readyTitle")}
                </h3>
                <p style={{ fontSize: 15, color: "#94a3b8", marginBottom: 20, lineHeight: 1.6 }}>
                  {t("readySubtitle")}
                </p>
                <a
                  href={`${APP_URL}/signup?lang=${locale}`}
                  style={{
                    display: "inline-block", background: "#10b981", color: "#fff",
                    padding: "12px 24px", borderRadius: 10, fontWeight: 600, fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  {t("readyCta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
