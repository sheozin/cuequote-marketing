import type { Metadata } from "next";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Changelog — What's New",
  description: "See the latest updates and improvements to CueQuote.",
  alternates: { canonical: "/changelog" },
};

const TYPE_COLORS: Record<
  string,
  { bg: string; text: string; label: string }
> = {
  new: { bg: "#ecfdf5", text: "#10b981", label: "New" },
  improved: { bg: "#eff6ff", text: "#3b82f6", label: "Improved" },
  fixed: { bg: "#fffbeb", text: "#d97706", label: "Fixed" },
  deprecated: { bg: "#fef2f2", text: "#ef4444", label: "Deprecated" },
};

export default async function ChangelogPage() {
  const supabase = await createClient();
  const { data: entries } = await supabase
    .from("cms_changelog")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #08172E 100%)",
          padding: "120px 24px 80px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#10b981",
              background: "rgba(16,185,129,0.15)",
              padding: "6px 16px",
              borderRadius: 20,
              marginBottom: 28,
            }}
          >
            <Sparkles size={12} /> Changelog
          </div>
          <h1
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 800,
              fontSize: 48,
              color: "#fff",
              marginBottom: 20,
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            What&apos;s <span style={{ color: "#10b981" }}>New</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            The latest updates, improvements, and fixes to CueQuote
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#f9fafb", padding: "80px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {!entries || entries.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 24px",
                color: "#6b7280",
                fontSize: 17,
              }}
            >
              No changelog entries yet. Check back soon!
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                paddingLeft: 32,
                borderLeft: "2px solid #e5e7eb",
              }}
            >
              {entries.map(
                (
                  entry: {
                    id: string;
                    version: string;
                    title: string;
                    description: string;
                    change_type: string;
                    published_at: string;
                  },
                  idx: number
                ) => {
                  const typeInfo =
                    TYPE_COLORS[entry.change_type] || TYPE_COLORS.new;
                  const date = new Date(entry.published_at).toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  );

                  return (
                    <div
                      key={entry.id || idx}
                      style={{
                        position: "relative",
                        marginBottom: 40,
                      }}
                    >
                      {/* Timeline dot */}
                      <div
                        style={{
                          position: "absolute",
                          left: -41,
                          top: 6,
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: "#fff",
                          border: "3px solid #10b981",
                        }}
                      />

                      {/* Card */}
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: 16,
                          padding: "28px 28px 24px",
                          border: "1px solid #e5e7eb",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                        }}
                      >
                        {/* Meta row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            marginBottom: 12,
                            flexWrap: "wrap",
                          }}
                        >
                          {/* Version badge */}
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#08172E",
                              background: "#f3f4f6",
                              padding: "4px 10px",
                              borderRadius: 6,
                              fontFamily: "monospace",
                            }}
                          >
                            {entry.version}
                          </span>

                          {/* Type badge */}
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: typeInfo.text,
                              background: typeInfo.bg,
                              padding: "4px 10px",
                              borderRadius: 6,
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            {typeInfo.label}
                          </span>

                          {/* Date */}
                          <span
                            style={{
                              fontSize: 13,
                              color: "#9ca3af",
                              marginLeft: "auto",
                            }}
                          >
                            {date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontWeight: 700,
                            fontSize: 18,
                            color: "#08172E",
                            marginBottom: 8,
                          }}
                        >
                          {entry.title}
                        </h3>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: 15,
                            color: "#4b5563",
                            lineHeight: 1.7,
                            margin: 0,
                          }}
                        >
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
