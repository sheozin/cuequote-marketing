import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CueQuote team. We'd love to hear from you — whether you have a question, feedback, or want to explore a partnership.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            Get in Touch
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 16, lineHeight: 1.15, letterSpacing: -1 }}>
            We&apos;d love to hear from you
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 48, maxWidth: 560 }}>
            Whether you have a question about CueQuote, need help getting started, or want to discuss a partnership — drop us a line.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 8 }}>
              <div style={{
                background: "#f9fafb", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb",
              }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, color: "#08172E", marginBottom: 20 }}>
                  Contact Details
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Mail size={18} style={{ color: "#10b981", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Email</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>hello@cuequote.com</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <MapPin size={18} style={{ color: "#10b981", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Location</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>Europe (Remote)</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Clock size={18} style={{ color: "#10b981", marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#374151" }}>Response Time</div>
                      <div style={{ fontSize: 15, color: "#6b7280" }}>Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                background: "linear-gradient(135deg, #08172E 0%, #0f2847 100%)",
                borderRadius: 16, padding: 32, color: "#fff",
              }}>
                <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18, marginBottom: 12 }}>
                  Ready to get started?
                </h3>
                <p style={{ fontSize: 15, color: "#94a3b8", marginBottom: 20, lineHeight: 1.6 }}>
                  Skip the form and jump straight into CueQuote. Your first 3 proposals are free — no credit card required.
                </p>
                <a
                  href={`${APP_URL}/signup`}
                  style={{
                    display: "inline-block", background: "#10b981", color: "#fff",
                    padding: "12px 24px", borderRadius: 10, fontWeight: 600, fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Start Free
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
