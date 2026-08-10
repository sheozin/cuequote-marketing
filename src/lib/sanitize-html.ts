/**
 * Allowlist sanitiser for blog and tutorial body HTML.
 *
 * Post bodies are rendered with dangerouslySetInnerHTML because they carry
 * intentional markup — links, headings, lists. The content comes from our own
 * message files, which is why this was left alone for a long time, but "we
 * wrote it" is a property of today's repo rather than a property of the code:
 * a translation pipeline, a CMS import or a future contributor all reach the
 * same field, and nothing in between would stop a script tag.
 *
 * Anything not on the allowlist is escaped rather than dropped, so unexpected
 * markup becomes visible text instead of silently disappearing — a stripped
 * tag hides an authoring mistake, an escaped one shows it.
 *
 * A survey of every post body across all five locales found exactly these
 * tags in use: a, p, h2, li, strong, ul, code — with href and style.
 */

const ALLOWED_TAGS = new Set([
  'a', 'p', 'br', 'strong', 'b', 'em', 'i', 'code',
  'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'blockquote',
]);

/** Attributes permitted, per tag. Everything else — including every on* event
 *  handler — is discarded. */
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(['href', 'title', 'target', 'rel']),
  '*': new Set(['style']),
};

/** Only schemes that cannot execute. Notably excludes javascript: and data:. */
function safeHref(value: string): boolean {
  const v = value.trim().toLowerCase();
  if (v.startsWith('/') || v.startsWith('#')) return true;
  return /^(https?:|mailto:)/.test(v);
}

/** Inline styles cannot run script in any current browser, but url() can pull a
 *  remote request out of a page, so it is refused. */
function safeStyle(value: string): boolean {
  return !/url\s*\(|expression\s*\(|javascript:/i.test(value);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function sanitizeHtml(input: string): string {
  // Split on tags, keeping them, so text runs and tags can be handled apart.
  return input.replace(/<[^>]*>?/g, (tag) => {
    const match = /^<\s*(\/?)\s*([a-zA-Z][a-zA-Z0-9]*)([\s\S]*?)\/?\s*>$/.exec(tag);
    if (!match) return escapeHtml(tag);

    const [, closing, rawName, rawAttrs] = match;
    const name = rawName.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) return escapeHtml(tag);
    if (closing) return `</${name}>`;

    const kept: string[] = [];
    for (const attr of rawAttrs.matchAll(/([a-zA-Z-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
      const key = attr[1].toLowerCase();
      const value = attr[3] ?? attr[4] ?? '';

      const permitted = ALLOWED_ATTRS[name]?.has(key) || ALLOWED_ATTRS['*'].has(key);
      if (!permitted) continue;
      if (key === 'href' && !safeHref(value)) continue;
      if (key === 'style' && !safeStyle(value)) continue;

      kept.push(`${key}="${escapeHtml(value)}"`);
    }

    // Anything opening a new window gets noopener: without it the opened page
    // can navigate this one via window.opener.
    if (name === 'a' && /target\s*=\s*["']_blank/i.test(rawAttrs) &&
        !kept.some((a) => a.startsWith('rel='))) {
      kept.push('rel="noopener noreferrer"');
    }

    return `<${name}${kept.length ? ' ' + kept.join(' ') : ''}>`;
  });
}
