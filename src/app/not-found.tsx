import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background:
          "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #f9fafb 100%)",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 2,
          marginBottom: 64,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 800,
            fontSize: 28,
            color: "#08172E",
          }}
        >
          Cue
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 800,
            fontSize: 28,
            color: "#10b981",
          }}
        >
          Quote
        </span>
      </Link>

      {/* 404 number */}
      <div
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 900,
          fontSize: 160,
          lineHeight: 1,
          color: "#e5e7eb",
          marginBottom: 8,
          letterSpacing: -8,
          userSelect: "none",
        }}
      >
        404
      </div>

      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 800,
          fontSize: 32,
          color: "#08172E",
          marginBottom: 12,
          letterSpacing: -0.5,
        }}
      >
        Page not found
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: 17,
          color: "#6b7280",
          lineHeight: 1.7,
          maxWidth: 440,
          marginBottom: 40,
        }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#10b981",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 16,
            transition: "background 0.2s",
            minWidth: 140,
          }}
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            color: "#08172E",
            padding: "14px 32px",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 16,
            border: "2px solid #d1d5db",
            transition: "border-color 0.2s",
            minWidth: 140,
          }}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
