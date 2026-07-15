"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const APP_URL = "https://app.cuequote.com";
const appLink = (path: string, locale: string) =>
  `${APP_URL}${path}${locale !== 'en' ? `?lang=${locale}` : ''}`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  const [showSolutions, setShowSolutions] = useState(false);

  const links = [
    { label: t("features"), href: "/#features" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  const solutionsLabel = t("solutions", { defaultValue: "Solutions" });

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24, color: "#08172E" }}>
            Cue
          </span>
          <span style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24, color: "#10b981" }}>
            Quote
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="hide-mobile">
          <Link href="/#features" style={{ textDecoration: "none", fontSize: 14, fontWeight: 500, color: "#4b5563" }}>
            {t("features")}
          </Link>

          {/* Solutions dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowSolutions(true)}
            onMouseLeave={() => setShowSolutions(false)}
          >
            <button
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 500, color: "#4b5563",
                display: "flex", alignItems: "center", gap: 4, padding: 0,
              }}
            >
              {solutionsLabel}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: "transform 0.2s", transform: showSolutions ? "rotate(180deg)" : "none" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {showSolutions && (
              <div style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)",
                paddingTop: 8,
              }}>
                <div style={{
                  background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.08)", padding: 8, minWidth: 300,
                }}>
                  <Link href="/for-av-companies" onClick={() => setShowSolutions(false)} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                    borderRadius: 10, textDecoration: "none", color: "#374151", transition: "background 0.15s",
                  }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 3v18" /><path d="M3 7.5h4" /><path d="M3 12h18" /><path d="M3 16.5h4" /><path d="M21 7.5h-4" /><path d="M21 16.5h-4" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#08172E" }}>{t("forAv")}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{t("forAvNavDesc", { defaultValue: "Create proposals from your catalog, send branded PDFs" })}</div>
                    </div>
                  </Link>
                  <Link href="/for-event-planners" onClick={() => setShowSolutions(false)} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                    borderRadius: 10, textDecoration: "none", color: "#374151", transition: "background 0.15s",
                  }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#08172E", display: "flex", alignItems: "center", gap: 6 }}>
                          {t("forPlanners")}
                          <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", background: "#10b981", padding: "2px 6px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>
                            {t("new", { defaultValue: "New" })}
                          </span>
                        </div>
                        <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{t("forPlannersNavDesc", { defaultValue: "Plan your event's AV with budget estimates and vendor briefs" })}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map(({ label, href }) => (
            <Link key={label} href={href} style={{
              textDecoration: "none", fontSize: 14, fontWeight: 500,
              color: "#4b5563", transition: "color 0.2s",
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* CTA + Language Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="hide-mobile">
          <LanguageSwitcher currentLocale={locale} />
          <Link href={appLink('/login', locale)} style={{
            textDecoration: "none", fontSize: 14, fontWeight: 500, color: "#4b5563",
          }}>
            {t("login")}
          </Link>
          <Link href={appLink('/signup', locale)} style={{
            textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#fff",
            background: "#10b981", padding: "8px 20px", borderRadius: 8,
            transition: "background 0.2s",
          }}>
            {t("startFree")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: "none", border: "none", padding: 8, cursor: "pointer", display: "none" }}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#08172E" strokeWidth="2">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          padding: "16px 24px", borderTop: "1px solid #e5e7eb",
          display: "flex", flexDirection: "column", gap: 16,
        }}>
          <Link href="/#features" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#08172E" }}>{t("features")}</Link>
          <Link href="/for-av-companies" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#08172E" }}>{t("forAv")}</Link>
          <Link href="/for-event-planners" onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#08172E", display: "flex", alignItems: "center", gap: 6 }}>
            {t("forPlanners")}
            <span style={{ fontSize: 9, fontWeight: 700, color: "#fff", background: "#10b981", padding: "2px 6px", borderRadius: 4, textTransform: "uppercase" }}>{t("new", { defaultValue: "New" })}</span>
          </Link>
          {links.slice(1).map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#08172E" }}>{label}</Link>
          ))}
          <div style={{ padding: "8px 0" }}>
            <LanguageSwitcher currentLocale={locale} dropDirection="up" />
          </div>
          <Link href={appLink('/login', locale)} onClick={() => setOpen(false)} style={{
            textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#4b5563",
            textAlign: "center",
          }}>
            {t("signIn")}
          </Link>
          <Link href={appLink('/signup', locale)} onClick={() => setOpen(false)} style={{
            textDecoration: "none", fontSize: 16, fontWeight: 600, color: "#fff",
            background: "#10b981", padding: "12px 24px", borderRadius: 8, textAlign: "center",
          }}>
            {t("startFree")}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
