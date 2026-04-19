import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { POSTS } from "../../../lib/blog-posts";

/* ─── Category colors ──────────────────────────────────────────────────────── */

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Guides: { bg: "#ecfdf5", text: "#10b981" },
  Industry: { bg: "#eff6ff", text: "#3b82f6" },
  Technology: { bg: "#f5f3ff", text: "#8b5cf6" },
  Business: { bg: "#fef3c7", text: "#d97706" },
};

/* ─── Static params ─────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

/* ─── Metadata ──────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  const tp = await getTranslations("posts");
  const title = tp(`${slug}.title`);
  const description = tp(`${slug}.excerpt`);
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      title,
      description,
    },
  };
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const cat = CATEGORY_COLORS[post.category] || CATEGORY_COLORS.Guides;
  const t = await getTranslations("blog");
  const tp = await getTranslations("posts");

  const title = tp(`${slug}.title`);
  const excerpt = tp(`${slug}.excerpt`);
  const readTime = tp(`${slug}.readTime`);
  const contentArray = tp.raw(`${slug}.content`) as string[];

  // Article JSON-LD for rich search results — content is static/trusted (not user input)
  const articleLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Sherif Abdalazeem', url: 'https://cuequote.com/about' },
    publisher: { '@type': 'Organization', name: 'CueQuote', url: 'https://cuequote.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://cuequote.com/blog/${slug}` },
    articleSection: post.category,
  })

  return (
    <>
      <Nav />
      {/* Safe: articleLd is built from trusted static data (post titles/dates), not user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleLd }} />

      {/* ── Article header ──────────────────────────────────────────── */}
      <section style={{
        padding: "80px 24px 0",
        background: "#fff",
      }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 14, fontWeight: 500, color: "#6b7280",
              textDecoration: "none", marginBottom: 40,
              transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={16} /> {t("backToBlock")}
          </Link>

          {/* Category badge */}
          <div style={{ marginBottom: 20 }}>
            <span style={{
              fontSize: 12, fontWeight: 600, color: cat.text,
              background: cat.bg, padding: "5px 14px", borderRadius: 12,
            }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "var(--font-dm-sans)", fontWeight: 800, fontSize: 42,
            color: "#08172E", lineHeight: 1.15, letterSpacing: -1,
            marginBottom: 24,
          }}>
            {title}
          </h1>

          {/* Meta row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 20,
            marginBottom: 40, paddingBottom: 32,
            borderBottom: "1px solid #e5e7eb",
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, color: "#6b7280",
            }}>
              <Calendar size={14} style={{ color: "#9ca3af" }} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long", day: "numeric", year: "numeric",
              })}
            </span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 13, color: "#6b7280",
            }}>
              <Clock size={14} style={{ color: "#9ca3af" }} />
              {readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ────────────────────────────────────────────── */}
      <article style={{ padding: "0 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {/* Lead excerpt */}
          <p style={{
            fontSize: 19, color: "#374151", lineHeight: 1.75,
            marginBottom: 40,
            borderInlineStart: "3px solid #10b981",
            paddingInlineStart: 24,
            fontStyle: "italic",
          }}>
            {excerpt}
          </p>

          {/* Body paragraphs */}
          {contentArray.map((paragraph, i) => (
            <p
              key={i}
              style={{
                fontSize: 17, color: "#374151", lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* Footer divider */}
          <div style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: 56, paddingTop: 32,
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontSize: 14, fontWeight: 600, color: "#10b981",
                textDecoration: "none",
              }}
            >
              <ArrowLeft size={14} /> {t("allPosts")}
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
