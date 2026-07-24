import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import SubscribeForm from "../../../components/SubscribeForm";
import { BlogCategoryFilter } from "../../../components/BlogCategoryFilter";
import { ArrowRight } from "lucide-react";
import { POSTS } from "../../../lib/blog-posts";
import { getTranslations, getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog");
  const locale = await getLocale();
  const localePath = locale === 'en' ? '' : `/${locale}`;
  const pagePath = '/blog';
  const title = t("metaTitle", { defaultValue: "Event Production Blog — AV Tips & Industry Insights" });
  const description = t("metaDescription", { defaultValue: "Expert guides on AV pricing, event production budgets, proposal best practices, and AI tools for event professionals. Tips for AV companies and planners." });
  return {
    title,
    description,
    alternates: {
      canonical: `https://cuequote.com${localePath}${pagePath}`,
      languages: {
        'en': `https://cuequote.com${pagePath}`,
        'pl': `https://cuequote.com/pl${pagePath}`,
        'ar': `https://cuequote.com/ar${pagePath}`,
        'de': `https://cuequote.com/de${pagePath}`,
        'fr': `https://cuequote.com/fr${pagePath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://cuequote.com${localePath}${pagePath}`,
      siteName: "CueQuote",
      type: "website",
      images: [{ url: 'https://cuequote.com/og-image.png', width: 1200, height: 630, alt: 'CueQuote Blog — Event Production Tips & AV Insights' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@cuequote',
      images: ['https://cuequote.com/og-image.png'],
    },
  };
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981", border: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6", border: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6", border: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706", border: "#d97706" },
};

const CATEGORY_EMOJI: Record<string, string> = {
  Guides: "\uD83D\uDCD6",
  Industry: "\uD83C\uDFED",
  Technology: "\u26A1",
  Business: "\uD83D\uDCBC",
};

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const tp = await getTranslations("posts");
  const ts = await getTranslations("subscribe");
  const locale = await getLocale();

  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const featuredCat = CATEGORY_COLORS[featured.category] || CATEGORY_COLORS.Guides;

  // Insert newsletter CTA after 6th post
  const NEWSLETTER_INSERT_INDEX = 6;

  const categories = [
    { key: "Guides", label: t("categoryGuides", { defaultValue: "Guides" }) },
    { key: "Industry", label: t("categoryIndustry", { defaultValue: "Industry" }) },
    { key: "Technology", label: t("categoryTechnology", { defaultValue: "Technology" }) },
    { key: "Business", label: t("categoryBusiness", { defaultValue: "Business" }) },
  ];

  // Safe: breadcrumbLd is built from static data, not user input
  const breadcrumbLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cuequote.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cuequote.com/blog' },
    ],
  });

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbLd }} />

      {/* ── Hero header ──────────────────────────────────────────── */}
      <section style={{ padding: "120px 24px 0", background: "#fff" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#10b981",
            background: "#ecfdf5", padding: "5px 14px", borderRadius: 20, marginBottom: 20,
            letterSpacing: 0.5, textTransform: "uppercase",
          }}>
            {t("badge")}
          </div>

          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 48,
            color: "#08172E", marginBottom: 14, lineHeight: 1.1, letterSpacing: -1.5,
            maxWidth: 600,
          }}>
            {t("heading")}
          </h1>
          <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 0, maxWidth: 540, lineHeight: 1.6 }}>
            {t("headingSubtitle")}
          </p>
        </div>
      </section>

      {/* ── Featured post (magazine-style) ────────────────────────── */}
      <section style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }} data-blog-featured data-category={featured.category}>
          <Link
            href={`/blog/${featured.slug}`}
            className="blog-featured-link"
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <article
              className="blog-featured-card"
              style={{
                borderRadius: 24,
                padding: "56px 52px",
                display: "grid",
                gridTemplateColumns: "1fr 200px",
                gap: 48,
                alignItems: "center",
                transition: "box-shadow 0.3s ease, transform 0.2s ease",
                cursor: "pointer",
                background: `linear-gradient(135deg, ${featuredCat.bg} 0%, #fff 60%)`,
                border: "1px solid #e5e7eb",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative accent */}
              <div style={{
                position: "absolute", top: 0, left: 0, width: 6, height: "100%",
                background: featuredCat.border, borderRadius: "24px 0 0 24px",
              }} />

              <div style={{ paddingLeft: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: "#d97706",
                    background: "#fef3c7", padding: "4px 12px", borderRadius: 100,
                    textTransform: "uppercase", letterSpacing: 0.8,
                  }}>
                    {t("featured", { defaultValue: "Featured" })}
                  </span>
                  <span style={{
                    fontSize: 12, fontWeight: 600, color: featuredCat.text,
                    background: featuredCat.bg, padding: "4px 12px", borderRadius: 100,
                  }}>
                    {t(`category${featured.category}`, { defaultValue: featured.category })}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 32,
                  color: "#08172E", lineHeight: 1.2, marginBottom: 16, letterSpacing: -0.5,
                  maxWidth: 580,
                }}>
                  {tp(`${featured.slug}.title`)}
                </h2>

                <p style={{
                  fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 24,
                  maxWidth: 540,
                  display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {tp(`${featured.slug}.excerpt`)}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>
                    {new Date(featured.date).toLocaleDateString(locale, { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span style={{ fontSize: 13, color: "#9ca3af" }}>{tp(`${featured.slug}.readTime`)}</span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 14, fontWeight: 700, color: featuredCat.text,
                  }}>
                    {t("readMore")} <ArrowRight size={15} />
                  </span>
                </div>
              </div>

              <div style={{
                width: 160, height: 160, borderRadius: 24,
                background: `linear-gradient(135deg, ${featuredCat.bg}, ${featuredCat.border}30)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, border: `1px solid ${featuredCat.border}20`,
              }}>
                <span style={{ fontSize: 56 }}>
                  {CATEGORY_EMOJI[featured.category] || "\uD83D\uDCD6"}
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* ── Category filter bar ──────────────────────────────────── */}
      <section style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <BlogCategoryFilter
            categories={categories}
            allLabel={t("allPosts", { defaultValue: "All Posts" })}
          />
        </div>
      </section>

      {/* ── Post grid ────────────────────────────────────────────── */}
      <section style={{ padding: "32px 24px 96px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div className="blog-grid" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
          }}>
            {rest.map((post, index) => {
              const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;

              return (
                <>
                  {/* Newsletter CTA injected after Nth post */}
                  {index === NEWSLETTER_INSERT_INDEX && (
                    <div
                      key="newsletter-cta"
                      data-blog-newsletter
                      className="blog-newsletter-cta"
                      style={{
                        gridColumn: "1 / -1",
                        borderRadius: 20,
                        padding: "48px 40px",
                        background: "linear-gradient(135deg, #08172E 0%, #0f2744 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: 8,
                      }}
                    >
                      <h3 style={{
                        fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 24,
                        color: "#fff", letterSpacing: -0.5, marginBottom: 4,
                      }}>
                        {ts("title")}
                      </h3>
                      <p style={{ fontSize: 15, color: "#94a3b8", marginBottom: 16, maxWidth: 440, lineHeight: 1.5 }}>
                        {ts("subtitle")}
                      </p>
                      <SubscribeForm />
                    </div>
                  )}

                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-card-link"
                    data-blog-card
                    data-category={post.category}
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                  >
                    <article
                      className="blog-card"
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 16,
                        padding: "28px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                        transition: "box-shadow 0.25s ease, transform 0.2s ease",
                        cursor: "pointer",
                        height: "100%",
                        background: "#fff",
                        position: "relative",
                      }}
                    >
                      {/* Top accent bar */}
                      <div style={{
                        position: "absolute", top: 0, left: 24, right: 24,
                        height: 3, borderRadius: "0 0 4px 4px",
                        background: cat.border, opacity: 0.6,
                      }} />

                      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 4 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: cat.text,
                          background: cat.bg, padding: "3px 10px", borderRadius: 100,
                          letterSpacing: 0.3,
                        }}>
                          {t(`category${post.category}`, { defaultValue: post.category })}
                        </span>
                        <span style={{ fontSize: 12, color: "#b0b8c4" }}>{tp(`${post.slug}.readTime`)}</span>
                      </div>

                      <h2 style={{
                        fontFamily: "var(--font-dm-sans)", fontWeight: 700, fontSize: 18,
                        color: "#08172E", lineHeight: 1.35,
                        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                        {tp(`${post.slug}.title`)}
                      </h2>

                      <p style={{
                        fontSize: 14, color: "#6b7280", lineHeight: 1.65, flex: 1,
                        display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                        {tp(`${post.slug}.excerpt`)}
                      </p>

                      <div style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        paddingTop: 12, borderTop: "1px solid #f3f4f6", marginTop: "auto",
                      }}>
                        <span style={{ fontSize: 13, color: "#9ca3af" }}>
                          {new Date(post.date).toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span
                          className="blog-card-arrow"
                          style={{
                            display: "inline-flex", alignItems: "center", gap: 4,
                            fontSize: 13, fontWeight: 600, color: cat.text,
                            transition: "gap 0.2s ease",
                          }}
                        >
                          {t("readMore")} <ArrowRight size={13} />
                        </span>
                      </div>
                    </article>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        /* Featured card hover */
        .blog-featured-link:hover .blog-featured-card {
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          transform: translateY(-3px);
        }

        /* Post card hover */
        .blog-card-link:hover .blog-card {
          box-shadow: 0 12px 40px rgba(0,0,0,0.07);
          transform: translateY(-4px);
        }
        .blog-card-link:hover .blog-card-arrow {
          gap: 8px;
        }

        /* Newsletter CTA email form dark-mode styling */
        .blog-newsletter-cta input[type="email"] {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.2) !important;
          color: #fff !important;
        }
        .blog-newsletter-cta input[type="email"]::placeholder {
          color: #64748b !important;
        }
        .blog-newsletter-cta .email-form {
          max-width: 440px !important;
        }

        /* Responsive: tablet */
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Responsive: mobile */
        @media (max-width: 768px) {
          .blog-featured-card {
            grid-template-columns: 1fr !important;
            padding: 36px 28px !important;
          }
          .blog-featured-card > div:last-child {
            display: none !important;
          }
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-newsletter-cta {
            padding: 36px 24px !important;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
