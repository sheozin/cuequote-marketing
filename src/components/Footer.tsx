import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  const sections = [
    {
      title: t("product"),
      links: [
        { label: t("features"), href: "/#features" },
        { label: t("howItWorks"), href: "/#how-it-works" },
        { label: t("forAvCompanies"), href: "/for-av-companies" },
        { label: t("forEventPlanners"), href: "/for-event-planners" },
        { label: t("changelog"), href: "/changelog" },
      ],
    },
    {
      title: t("resources"),
      links: [
        { label: t("docs"), href: "/docs" },
        { label: t("tutorials"), href: "/tutorials" },
        { label: t("blog"), href: "/blog" },
        { label: t("faq"), href: "/#faq" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("about"), href: "/about" },
        { label: t("contact"), href: "/contact" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacy"), href: "/privacy" },
        { label: t("terms"), href: "/terms" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#08172E", color: "#94a3b8" }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 0" }}>
        {/* Desktop: full grid | Mobile: brand + inline sections */}
        <div className="footer-desktop" style={{
          display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
          gap: 40, marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#fff" }}>Cue</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#10b981" }}>Quote</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 20, maxWidth: 240 }}>
              {t("tagline")}
            </p>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h2 style={{
                color: "#fff", fontSize: 12, fontWeight: 700, marginBottom: 14,
                textTransform: "uppercase", letterSpacing: 1.2,
              }}>
                {section.title}
              </h2>
              {section.links.map(({ label, href }) => (
                <Link key={href} href={href} style={{
                  display: "block", textDecoration: "none", color: "#94a3b8",
                  fontSize: 13, marginBottom: 10, transition: "color 0.15s",
                }}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile: collapsed accordion-style */}
        <div className="footer-mobile" style={{ display: "none", marginBottom: 32 }}>
          {/* Brand centered */}
          <div style={{ textAlign: "center", marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid #1e293b" }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#fff" }}>Cue</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#10b981" }}>Quote</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, maxWidth: 280, margin: "0 auto" }}>
              {t("tagline")}
            </p>
          </div>

          {/* All links in a compact 2x2 grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 32px" }}>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 style={{
                  color: "#fff", fontSize: 11, fontWeight: 700, marginBottom: 10,
                  textTransform: "uppercase", letterSpacing: 1.2,
                }}>
                  {section.title}
                </h2>
                {section.links.map(({ label, href }) => (
                  <Link key={href} href={href} style={{
                    display: "block", textDecoration: "none", color: "#94a3b8",
                    fontSize: 13, marginBottom: 8, lineHeight: 1.4,
                  }}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1e293b" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "20px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 12, color: "#94a3b8" }}>
            &copy; {new Date().getFullYear()} CueQuote. {t("copyright")}
          </p>
          <p style={{ fontSize: 12, color: "#94a3b8" }}>
            {t("by")} <span style={{ color: "#10b981" }}>AVE Event Solutions</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-desktop { display: none !important; }
          .footer-mobile { display: block !important; }
        }
      `}</style>
    </footer>
  );
}
