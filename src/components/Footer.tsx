import Link from "next/link";

export default function Footer() {
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
              AI-powered AV proposals for event production professionals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Product</h4>
            {[
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "/pricing" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "FAQ", href: "/#faq" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Company</h4>
            {[
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 }}>Legal</h4>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ display: "block", textDecoration: "none", color: "#94a3b8", fontSize: 14, marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13 }}>&copy; {new Date().getFullYear()} CueQuote. All rights reserved.</p>
          <p style={{ fontSize: 13 }}>
            By <Link href="https://ave.events" style={{ color: "#10b981", textDecoration: "none" }}>AVE Events</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
