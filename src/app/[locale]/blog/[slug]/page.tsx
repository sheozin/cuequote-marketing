import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import { ArrowLeft, Clock, Calendar, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { POSTS } from "../../../../lib/blog-posts";
import ShareButtons from "../../../../components/ShareButtons";

/* ─── Category gradients for hero ─────────────────────────────────────────── */

const CATEGORY_STYLE: Record<string, { gradient: string; accent: string; badge: string; badgeText: string }> = {
  Guides:     { gradient: "linear-gradient(135deg, #08172E 0%, #0f2d50 50%, #134e6e 100%)", accent: "#10b981", badge: "rgba(16,185,129,0.15)", badgeText: "#10b981" },
  Industry:   { gradient: "linear-gradient(135deg, #08172E 0%, #1a2744 50%, #1e3a5f 100%)", accent: "#3b82f6", badge: "rgba(59,130,246,0.15)", badgeText: "#60a5fa" },
  Technology: { gradient: "linear-gradient(135deg, #08172E 0%, #1a1a3e 50%, #2d1b69 100%)", accent: "#8b5cf6", badge: "rgba(139,92,246,0.15)", badgeText: "#a78bfa" },
  Business:   { gradient: "linear-gradient(135deg, #08172E 0%, #1f2937 50%, #2d1f0e 100%)", accent: "#f59e0b", badge: "rgba(245,158,11,0.15)", badgeText: "#fbbf24" },
};

/* ─── Static params ─────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  const locales = ['en', 'pl', 'ar', 'de', 'fr'];
  return locales.flatMap((locale) =>
    POSTS.map((post) => ({ locale, slug: post.slug }))
  );
}

/* ─── Metadata ──────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  const tp = await getTranslations("posts");
  const title = tp(`${slug}.title`);
  const description = tp(`${slug}.excerpt`);
  const ogImageUrl = `https://cuequote.com/blog/${slug}/opengraph-image`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://cuequote.com/blog/${slug}`,
      siteName: "CueQuote",
      locale: "en_US",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@cuequote',
      images: [ogImageUrl],
    },
  };
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const style = CATEGORY_STYLE[post.category] || CATEGORY_STYLE.Guides;
  const t = await getTranslations("blog");
  const tp = await getTranslations("posts");

  const title = tp(`${slug}.title`);
  const excerpt = tp(`${slug}.excerpt`);
  const readTime = tp(`${slug}.readTime`);
  const contentArray = tp.raw(`${slug}.content`) as string[];

  // Extract key takeaways: first sentence of paragraphs 0, 2, 4, 6 (up to 5)
  const takeaways = contentArray
    .filter((_, i) => i % 2 === 0)
    .slice(0, 5)
    .map(p => {
      const firstSentence = p.match(/^[^.!?]+[.!?]/)?.[0] || p.slice(0, 120) + '...';
      return firstSentence;
    });

  // Related posts: same category, excluding current, max 3
  const relatedPosts = POSTS
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  // Popular posts: latest 3 from different slugs
  const popularPosts = POSTS
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  // Insert inline CTA after ~40% of content
  const ctaInsertIndex = Math.floor(contentArray.length * 0.4);

  // Structured data — built from trusted static data (post titles/dates), not user input
  const structuredData = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Person', name: 'Sherif Abdalazeem', url: 'https://cuequote.com/about' },
      publisher: { '@type': 'Organization', name: 'CueQuote', url: 'https://cuequote.com', logo: { '@type': 'ImageObject', url: 'https://cuequote.com/icon.png' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://cuequote.com/blog/${slug}` },
      articleSection: post.category,
      image: `https://cuequote.com/blog/${slug}/opengraph-image`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cuequote.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cuequote.com/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://cuequote.com/blog/${slug}` },
      ],
    },
  ]);

  return (
    <>
      <Nav />
      {/* Safe: structuredData is built from trusted static data, not user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />

      {/* ── Hero banner ────────────────────────────────────────────── */}
      <section style={{
        background: style.gradient,
        padding: "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: `${style.accent}11`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -150, left: -50, width: 300, height: 300, borderRadius: "50%", background: `${style.accent}0a`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: 24 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, color: style.badgeText,
              background: style.badge, padding: "6px 16px", borderRadius: 12,
              textTransform: "uppercase", letterSpacing: 0.5,
            }}>
              {post.category}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800,
            fontSize: title.length > 60 ? 36 : 44,
            color: "#fff", lineHeight: 1.15, letterSpacing: -1,
            marginBottom: 20,
          }}>
            {title}
          </h1>

          <p style={{
            fontSize: 18, color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6, marginBottom: 28, maxWidth: 650,
          }}>
            {excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: `linear-gradient(135deg, ${style.accent}, ${style.accent}cc)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 16,
            }}>
              SA
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              <span style={{ color: "#fff", fontWeight: 600 }}>Sherif Abdalazeem</span>
              <br />
              <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Clock size={12} />
                  {readTime}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-column layout ──────────────────────────────────────── */}
      <article style={{ background: "#fff" }}>
        <div className="blog-grid" style={{
          maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px",
          display: "grid", gridTemplateColumns: "1fr 300px", gap: 60,
        }}>
          <div>
            {contentArray.map((paragraph, i) => (
              <div key={i}>
                <p style={{ fontSize: 17, color: "#374151", lineHeight: 1.8, marginBottom: 28 }}>
                  {paragraph}
                </p>
                {i === ctaInsertIndex && (
                  <div style={{
                    background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
                    borderRadius: 16, padding: 32, margin: "40px 0",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#08172E", marginBottom: 8 }}>
                      Ready to create proposals in minutes?
                    </h3>
                    <p style={{ fontSize: 14, color: "#374151", marginBottom: 16, lineHeight: 1.6 }}>
                      CueQuote generates professional AV proposals with AI. Start free, no credit card required.
                    </p>
                    <a href="https://app.cuequote.com" target="_blank" rel="noopener noreferrer" style={{
                      display: "inline-block", padding: "12px 28px", borderRadius: 10,
                      background: "#10b981", color: "#fff", fontWeight: 700,
                      fontSize: 14, textDecoration: "none",
                    }}>
                      Try CueQuote Free →
                    </a>
                  </div>
                )}
              </div>
            ))}

            <div style={{
              borderTop: "1px solid #e5e7eb", marginTop: 56, paddingTop: 32,
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <Link href="/blog" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontWeight: 600, color: "#10b981", textDecoration: "none",
              }}>
                <ArrowLeft size={14} /> {t("allPosts")}
              </Link>
              <ShareButtons url={`https://cuequote.com/blog/${slug}`} title={title} description={excerpt} />
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="blog-sidebar">
            <div className="sidebar-sticky">
            <div style={{
              background: "#f9fafb", borderRadius: 12, padding: 24,
              marginBottom: 24, borderLeft: `3px solid ${style.accent}`,
            }}>
              <h3 style={{
                fontSize: 14, fontWeight: 700, color: "#08172E",
                marginBottom: 16, display: "flex", alignItems: "center", gap: 8,
              }}>
                <Zap size={16} style={{ color: style.accent }} /> Key Takeaways
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {takeaways.map((item, i) => (
                  <li key={i} style={{
                    fontSize: 13, color: "#374151", padding: "8px 0",
                    paddingLeft: 20, position: "relative", lineHeight: 1.5,
                  }}>
                    <span style={{ position: "absolute", left: 0, color: style.accent, fontWeight: 700 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: "#f9fafb", borderRadius: 12, padding: 20,
              marginBottom: 24, textAlign: "center",
            }}>
              <h3 style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: 1.5, color: "#9ca3af", marginBottom: 12,
              }}>
                Share This Post
              </h3>
              <ShareButtons url={`https://cuequote.com/blog/${slug}`} title={title} description={excerpt} />
            </div>

            <div style={{ background: "#f9fafb", borderRadius: 12, padding: 24 }}>
              <h3 style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase",
                letterSpacing: 1.5, color: "#9ca3af", marginBottom: 16,
              }}>
                Popular This Week
              </h3>
              {popularPosts.map((pp, i) => {
                let ppTitle: string;
                try { ppTitle = tp(`${pp.slug}.title`); } catch { ppTitle = pp.slug.replace(/-/g, ' '); }
                return (
                  <Link key={pp.slug} href={`/blog/${pp.slug}`} style={{
                    display: "flex", gap: 12, padding: "12px 0",
                    borderBottom: i < popularPosts.length - 1 ? "1px solid #e5e7eb" : "none",
                    alignItems: "flex-start", textDecoration: "none",
                  }}>
                    <span style={{ fontSize: 28, fontWeight: 800, color: "#e5e7eb", lineHeight: 1, minWidth: 28 }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#08172E", lineHeight: 1.4 }}>
                      {ppTitle}
                    </span>
                  </Link>
                );
              })}
            </div>
            </div>{/* end sidebar-sticky */}
          </aside>
        </div>
      </article>

      {/* ── Related articles ───────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section style={{ background: "#fff", paddingBottom: 80 }}>
          <div className="related-grid-wrap" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, color: "#08172E", marginBottom: 24 }}>
              Related Articles
            </h2>
            <div className="related-grid" style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(relatedPosts.length, 3)}, 1fr)`,
              gap: 20,
            }}>
              {relatedPosts.map(rp => {
                const rpCat = CATEGORY_STYLE[rp.category] || CATEGORY_STYLE.Guides;
                let rpTitle: string, rpExcerpt: string;
                try { rpTitle = tp(`${rp.slug}.title`); } catch { rpTitle = rp.slug.replace(/-/g, ' '); }
                try { rpExcerpt = tp(`${rp.slug}.excerpt`); } catch { rpExcerpt = ''; }
                return (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{
                    background: "#f9fafb", borderRadius: 12, padding: 24,
                    border: "1px solid #e5e7eb", textDecoration: "none",
                  }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: rpCat.accent, textTransform: "uppercase", marginBottom: 8, letterSpacing: 0.5 }}>
                      {rp.category}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#08172E", lineHeight: 1.4, marginBottom: 8 }}>
                      {rpTitle}
                    </div>
                    <div style={{
                      fontSize: 13, color: "#6b7280", lineHeight: 1.5,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {rpExcerpt}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <style>{`
        .sidebar-sticky { position: -webkit-sticky; position: sticky; top: 80px; }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-sidebar { position: static !important; }
          .sidebar-sticky { position: static !important; }
          section:first-of-type h1 { font-size: 28px !important; }
          section:first-of-type > div > p { font-size: 15px !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
