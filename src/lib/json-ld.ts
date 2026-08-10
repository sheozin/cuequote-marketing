/**
 * Serialising structured data for a <script type="application/ld+json"> tag.
 *
 * Plain JSON.stringify is not safe to drop into a script element. The HTML
 * parser looks for the literal "</script>" before any JSON parsing happens, so
 * a single field containing that string closes the tag early and everything
 * after it is parsed as markup. Blog titles, tutorial names and post excerpts
 * all reach these tags, and they are ordinary editable content.
 *
 * Escaping "<" as < is still valid JSON and still the same string once
 * parsed — it simply cannot terminate the tag. U+2028 and U+2029 are escaped
 * too: they are legal in JSON but not in a JavaScript string literal, and some
 * consumers parse this block as JS.
 */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
