import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer style={{ background: "#08172E", color: "#94a3b8", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#fff" }}>Cue</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#10b981" }}>Quote</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>
              {t("tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t("product")}</h4>
            {[
              { label: t("features"), href: "/#features" },
              { label: t("howItWorks"), href: "/#how-it-works" },
              { label: t("faq"), href: "/#faq" },
              { label: t("changelog"), href: "/changelog" },
              { label: t("docs"), href: "/docs" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t("company")}</h4>
            {[
              { label: t("about"), href: "/about" },
              { label: t("blog"), href: "/blog" },
              { label: t("contact"), href: "/contact" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>{t("legal")}</h4>
            {[
              { label: t("privacy"), href: "/privacy" },
              { label: t("terms"), href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13 }}>&copy; {new Date().getFullYear()} CueQuote. {t("copyright")}</p>
          <p style={{ fontSize: 13 }}>
            {t("by")} <span style={{ color: "#10b981" }}>AVE Events</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
