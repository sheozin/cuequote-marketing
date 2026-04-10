import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Sparkles, Check, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

const APP_URL = "https://app.cuequote.com";

export const metadata: Metadata = {
  title: "About",
  description: "CueQuote is built by AVE Events — a team that has been in the AV production trenches. We built the tool we wished existed.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            <Sparkles size={12} /> {t("badge")}
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 24, lineHeight: 1.15, letterSpacing: -1 }}>
            {t("heading")}{" "}
            <span style={{ color: "#10b981" }}>{t("headingHighlight")}</span>
          </h1>

          <div style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.8 }}>
            <p style={{ marginBottom: 24 }}>
              {t("p1")}
            </p>
            <p style={{ marginBottom: 24 }}>
              {t.rich("p2", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p style={{ marginBottom: 24 }}>
              {t("p3")}
            </p>
            <p style={{ marginBottom: 24 }}>
              {t("p4")}
            </p>

            <div style={{
              background: "#f9fafb", borderRadius: 16, padding: 32, marginBottom: 32,
              border: "1px solid #e5e7eb",
            }}>
              <h3 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", marginBottom: 16 }}>
                {t("whyDifferent")}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[t("diff1"), t("diff2"), t("diff3"), t("diff4")].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: 15 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={12} style={{ color: "#10b981" }} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p style={{ marginBottom: 32 }}>
              {t.rich("p5", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>

          <Link href={`${APP_URL}/signup`} style={{
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
            background: "#10b981", color: "#fff", padding: "14px 28px", borderRadius: 10,
            fontWeight: 600, fontSize: 16,
          }}>
            <Sparkles size={18} /> {t("cta")} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
