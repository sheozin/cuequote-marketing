"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const APP_URL = "https://app.cuequote.com";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { label: t("features"), href: "/#features" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("about"), href: "/about" },
    { label: t("blog"), href: "/blog" },
    { label: t("docs"), href: "/docs" },
    { label: t("tutorials"), href: "/tutorials" },
    { label: t("contact"), href: "/contact" },
  ];

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
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
          {links.map(({ label, href }) => (
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
          <Link href={`${APP_URL}/login`} style={{
            textDecoration: "none", fontSize: 14, fontWeight: 500, color: "#4b5563",
          }}>
            {t("login")}
          </Link>
          <Link href={`${APP_URL}/signup`} style={{
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
          {links.map(({ label, href }) => (
            <Link key={label} href={href}
              onClick={() => setOpen(false)}
              style={{ textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#08172E" }}
            >
              {label}
            </Link>
          ))}
          <div style={{ padding: "8px 0" }}>
            <LanguageSwitcher currentLocale={locale} />
          </div>
          <Link href={`${APP_URL}/login`} onClick={() => setOpen(false)} style={{
            textDecoration: "none", fontSize: 16, fontWeight: 500, color: "#4b5563",
            textAlign: "center",
          }}>
            {t("signIn")}
          </Link>
          <Link href={`${APP_URL}/signup`} onClick={() => setOpen(false)} style={{
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
