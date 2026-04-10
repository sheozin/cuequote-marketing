import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../../lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Tips, guides, and insights for AV professionals — from proposal writing to equipment pricing and industry trends.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706" },
};

export default function BlogPage() {
  return (
    <>
      <Nav />

      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "4px 12px", borderRadius: 20, marginBottom: 24,
          }}>
            Blog
          </div>

          <h1 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 44, color: "#08172E", marginBottom: 16, lineHeight: 1.15, letterSpacing: -1 }}>
            Insights for AV professionals
          </h1>
          <p style={{ fontSize: 17, color: "#6b7280", marginBottom: 48, maxWidth: 560 }}>
            Tips, guides, and industry perspectives to help you win more proposals and grow your AV business.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            {POSTS.map((post) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card-link"
                  style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                  <article
                    style={{
                      border: "1px solid #e5e7eb", borderRadius: 16, padding: 32,
                      display: "flex", flexDirection: "column", gap: 16,
                      transition: "box-shadow 0.2s, transform 0.2s",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 600, color: cat.text,
                        background: cat.bg, padding: "3px 10px", borderRadius: 12,
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: 13, color: "#9ca3af" }}>{post.readTime}</span>
                    </div>

                    <h2 style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 20, color: "#08172E", lineHeight: 1.3 }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 13, color: "#9ca3af" }}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span
                        style={{
                          display: "inline-flex", alignItems: "center", gap: 4,
                          fontSize: 14, fontWeight: 600, color: "#10b981",
                        }}
                      >
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
          <style>{`
            .blog-card-link:hover article {
              box-shadow: 0 8px 24px rgba(0,0,0,0.06);
              transform: translateY(-2px);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </>
  );
}
