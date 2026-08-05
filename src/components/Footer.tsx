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
        { label: t("avCostCalculator"), href: "/av-cost-calculator" },
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
        {/* One set of markup for both breakpoints. Desktop and mobile used to be two
            separate blocks toggled with display:none, which put every heading and every
            link into the DOM twice on every page. */}
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ marginBottom: 12 }}>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#fff" }}>Cue</span>
              <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 22, color: "#10b981" }}>Quote</span>
            </div>
            <p className="footer-tagline">{t("tagline")}</p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="footer-heading">{section.title}</h2>
              {section.links.map(({ label, href }) => (
                <Link key={href} href={href} className="footer-link">{label}</Link>
              ))}
            </div>
          ))}
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
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-tagline {
          font-size: 13px; line-height: 1.6; margin-bottom: 20px; max-width: 240px;
        }
        .footer-heading {
          color: #fff; font-size: 12px; font-weight: 700; margin: 0 0 14px;
          text-transform: uppercase; letter-spacing: 1.2px;
        }
        .footer-link {
          display: block; text-decoration: none; color: #94a3b8;
          font-size: 13px; margin-bottom: 10px; transition: color 0.15s;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px 32px;
            margin-bottom: 32px;
          }
          /* Brand spans both columns and centres, as it did in the old mobile block */
          .footer-brand {
            grid-column: 1 / -1;
            text-align: center;
            padding-bottom: 24px;
            margin-bottom: 4px;
            border-bottom: 1px solid #1e293b;
          }
          .footer-tagline {
            line-height: 1.5; max-width: 280px; margin: 0 auto;
          }
          .footer-heading { font-size: 11px; margin-bottom: 10px; }
          .footer-link { margin-bottom: 8px; line-height: 1.4; }
        }
      `}</style>
    </footer>
  );
}
