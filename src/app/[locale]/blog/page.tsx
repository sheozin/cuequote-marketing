import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../../../lib/blog-posts";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  const title = t("metaTitle", { defaultValue: "Blog" });
  const description = t("metaDescription", { defaultValue: "Tips, guides, and insights for AV professionals — from proposal writing to equipment pricing and industry trends." });
  return {
    title,
    description,
    alternates: { canonical: "/blog" },
    openGraph: { title, description },
  };
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981", border: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6", border: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6", border: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706", border: "#d97706" },
};

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const tp = await getTranslations("posts");

  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const featuredCat = CATEGORY_COLORS[featured.category] || CATEGORY_COLORS.Guides;

  return (
    <>
      <Nav />

      {/* ── Header ──────────────────────────────────────────────────── */}
      <section style={{ padding: "96px 24px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            {t("badge")}
          </div>

          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44,
            color: "#08172E", marginBottom: 16, lineHeight: 1.15, letterSpacing: -1,
          }}>
            {t("heading")}
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 56, maxWidth: 560 }}>
            {t("headingSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Featured post ───────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <Link
            href={`/blog/${featured.slug}`}
            className="blog-featured-link"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <article
              className="blog-featured-card"
              style={{
                border: "1px solid #e5e7eb",
                borderLeft: `4px solid ${featuredCat.border}`,
                borderRadius: 20,
                padding: "48px 44px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 40,
                alignItems: "center",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
                background: "#fff",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 600, color: featuredCat.text,
                    background: featuredCat.bg, padding: "4px 12px", borderRadius: 12,
                  }}>
                    {featured.category}
                  </span>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>{tp(`${featured.slug}.readTime`)}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: "#d97706",
                    background: "#fef3c7", padding: "3px 10px", borderRadius: 12,
                    textTransform: "uppercase", letterSpacing: 0.5,
                  }}>
                    Featured
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 28,
                  color: "#08172E", lineHeight: 1.25, marginBottom: 14, letterSpacing: -0.5,
                }}>
                  {tp(`${featured.slug}.title`)}
                </h2>

                <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 20, maxWidth: 580 }}>
                  {tp(`${featured.slug}.excerpt`)}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>
                    {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 14, fontWeight: 600, color: "#10b981",
                  }}>
                    {t("readMore")} <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              <div style={{
                width: 120, height: 120, borderRadius: 20,
                background: `linear-gradient(135deg, ${featuredCat.bg}, ${featuredCat.border}20)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontSize: 48 }}>
                  {featured.category === "Guides" ? "\uD83D\uDCD6" :
                   featured.category === "Industry" ? "\uD83C\uDFED" :
                   featured.category === "Technology" ? "\u26A1" : "\uD83D\uDCBC"}
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ── Post grid ───────────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div className="blog-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28,
          }}>
            {rest.map((post) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card-link"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article style={{
                    border: "1px solid #e5e7eb",
                    borderTop: `3px solid ${cat.border}`,
                    borderRadius: 16,
                    padding: "32px 28px",
                    display: "flex", flexDirection: "column", gap: 14,
                    transition: "box-shadow 0.2s, transform 0.2s",
                    cursor: "pointer",
                    height: "100%",
                    background: "#fff",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: cat.text,
                        background: cat.bg, padding: "3px 10px", borderRadius: 12,
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: 13, color: "#9ca3af" }}>{tp(`${post.slug}.readTime`)}</span>
                    </div>

                    <h2 style={{
                      fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20,
                      color: "#08172E", lineHeight: 1.3,
                    }}>
                      {tp(`${post.slug}.title`)}
                    </h2>

                    <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.65, flex: 1 }}>
                      {tp(`${post.slug}.excerpt`)}
                    </p>

                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      paddingTop: 8, borderTop: "1px solid #f3f4f6",
                    }}>
                      <span style={{ fontSize: 13, color: "#9ca3af" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 4,
                        fontSize: 14, fontWeight: 600, color: "#10b981",
                      }}>
                        {t("readMore")} <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .blog-card-link:hover article {
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }
        .blog-featured-link:hover .blog-featured-card {
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .blog-featured-card {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
          }
          .blog-featured-card > div:last-child {
            display: none !important;
          }
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
