#!/usr/bin/env node
/**
 * Publishes owner-approved blog drafts from the app's blog-feed edge function.
 *
 * For each feed post whose slug is not already in POSTS: validate it, insert the
 * POSTS entry at the top of src/lib/blog-posts.ts and add posts.<slug> to all 5
 * message files (same English text everywhere; de/fr/ar long-tail is noindexed).
 *
 * Feed posts with "mode":"update" are refreshes of a post already on the site:
 * the slug must exist in POSTS and en.json, and only en.json posts.<slug> title,
 * excerpt, readTime and content are replaced. The POSTS entry (date, category)
 * and the other locale files are left alone. A refresh whose text already
 * matches en.json is a no-op, since the feed keeps listing it until the app
 * sees it live.
 *
 * Invalid posts are skipped with a log line. Every file is computed in memory
 * first and only then written, so a post is never half-written.
 *
 * Usage: node scripts/publish-approved-posts.mjs [--feed-file <path>] [--dry-run]
 * Exit 0 on success or nothing to publish; 1 on real errors (feed unreachable,
 * malformed feed, repo files not in the expected shape).
 *
 * Run by .github/workflows/blog-publish.yml. When GITHUB_OUTPUT is set, a
 * commit summary is written there as `summary=publish <a>, <b>; refresh <c>`.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const FEED_URL = 'https://rurazinghbfskuoeikwi.supabase.co/functions/v1/blog-feed'
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const POSTS_FILE = path.join(ROOT, 'src', 'lib', 'blog-posts.ts')
const MESSAGES_DIR = path.join(ROOT, 'src', 'messages')
const LANGS = ['en', 'pl', 'de', 'fr', 'ar']
const CATEGORIES = ['Guides', 'Business', 'Product Updates', 'Technology', 'Industry']
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/
const POSTS_START = 'export const POSTS: BlogPostSummary[] = ['
const MODES = [undefined, 'new', 'update']
const COPY_FIELDS = ['title', 'excerpt', 'readTime', 'content']

function fail(msg) {
  console.error(`ERROR: ${msg}`)
  process.exit(1)
}

function parseArgs(argv) {
  const args = { feedFile: null, dryRun: false }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--dry-run') args.dryRun = true
    else if (argv[i] === '--feed-file') {
      args.feedFile = argv[++i]
      if (!args.feedFile) fail('--feed-file needs a path')
    } else fail(`unknown argument: ${argv[i]}`)
  }
  return args
}

async function loadFeed(feedFile) {
  let text
  if (feedFile) {
    try {
      text = fs.readFileSync(feedFile, 'utf8')
    } catch (e) {
      fail(`cannot read feed file ${feedFile}: ${e.message}`)
    }
  } else {
    let res
    try {
      res = await fetch(FEED_URL, { signal: AbortSignal.timeout(30000) })
    } catch (e) {
      fail(`feed unreachable (${FEED_URL}): ${e.message}`)
    }
    text = await res.text()
    if (!res.ok) fail(`feed returned HTTP ${res.status}: ${text.slice(0, 300)}`)
  }
  let feed
  try {
    feed = JSON.parse(text)
  } catch (e) {
    fail(`feed is not valid JSON: ${e.message}`)
  }
  if (!feed || !Array.isArray(feed.posts)) fail('feed has no "posts" array')
  return feed.posts
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0
}

/** Returns a list of problems; empty means valid. */
function validate(post) {
  const problems = []
  const { slug, category, date, title, excerpt, readTime, content } = post ?? {}
  if (typeof slug !== 'string' || !SLUG_RE.test(slug) || slug.length > 80) problems.push('bad slug')
  if (!CATEGORIES.includes(category)) problems.push(`category "${category}" not in ${CATEGORIES.join(', ')}`)
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(`${date}T00:00:00Z`)) || new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date) {
    problems.push(`bad date "${date}"`)
  }
  if (!isNonEmptyString(title)) problems.push('missing title')
  else if (title.length > 60) problems.push(`title is ${title.length} chars (max 60)`)
  if (!isNonEmptyString(excerpt)) problems.push('missing excerpt')
  else if (excerpt.length > 160) problems.push(`excerpt is ${excerpt.length} chars (max 160)`)
  if (!isNonEmptyString(readTime)) problems.push('missing readTime')
  if (!Array.isArray(content) || content.some((p) => typeof p !== 'string')) problems.push('content is not an array of strings')
  else if (content.filter(isNonEmptyString).length < 3) problems.push('fewer than 3 non-empty paragraphs')
  const allText = [title, excerpt, readTime, ...(Array.isArray(content) ? content : [])].filter((v) => typeof v === 'string').join('\n')
  if (allText.includes('\u2014')) problems.push('contains an em-dash (U+2014)')
  if (/<script/i.test(allText)) problems.push('contains "<script"')
  return problems
}

function existingSlugs(postsSource) {
  const start = postsSource.indexOf(POSTS_START)
  if (start === -1) fail(`${POSTS_FILE} has no "${POSTS_START}"`)
  return new Set([...postsSource.slice(start).matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]))
}

function insertPostsEntries(postsSource, posts) {
  const start = postsSource.indexOf(POSTS_START)
  // Insert before the first entry, after any leading comment lines.
  const firstEntry = postsSource.indexOf('\n  {\n', start)
  if (firstEntry === -1) fail(`cannot find the first POSTS entry in ${POSTS_FILE}`)
  const block = posts
    .map((p) => `  {\n    slug: ${JSON.stringify(p.slug)},\n    category: ${JSON.stringify(p.category)},\n    date: ${JSON.stringify(p.date)},\n    author: "team",\n  },`)
    .join('\n')
  return postsSource.slice(0, firstEntry + 1) + block + '\n' + postsSource.slice(firstEntry + 1)
}

async function main() {
  const args = parseArgs(process.argv.slice(2))
  const feedPosts = await loadFeed(args.feedFile)

  const postsSource = fs.readFileSync(POSTS_FILE, 'utf8')
  const known = existingSlugs(postsSource)

  const messages = {}
  for (const lang of LANGS) {
    const file = path.join(MESSAGES_DIR, `${lang}.json`)
    const raw = fs.readFileSync(file, 'utf8')
    const json = JSON.parse(raw)
    // We rewrite with JSON.stringify; refuse if that would reformat the file.
    if (JSON.stringify(json, null, 2) + '\n' !== raw) fail(`${lang}.json is not in 2-space JSON.stringify format; refusing to reformat it`)
    if (!json.posts || typeof json.posts !== 'object') fail(`${lang}.json has no "posts" object`)
    messages[lang] = { file, json }
  }

  const accepted = []
  const refreshed = []
  const seen = new Set()
  for (const post of feedPosts) {
    const label = typeof post?.slug === 'string' ? post.slug : JSON.stringify(post?.slug)
    if (!MODES.includes(post?.mode)) {
      console.log(`SKIP ${label}: unknown mode ${JSON.stringify(post.mode)}`)
      continue
    }
    if (post?.mode === 'update') {
      const problems = validate(post)
      const current = typeof post.slug === 'string' && Object.hasOwn(messages.en.json.posts, post.slug) ? messages.en.json.posts[post.slug] : null
      if (!known.has(post.slug) || !current) problems.push('refresh of a post that is not on the site (needs a POSTS entry and en.json posts.<slug>)')
      if (seen.has(post.slug)) problems.push('duplicate slug in feed')
      if (problems.length) {
        console.log(`SKIP ${label}: ${problems.join('; ')}`)
        continue
      }
      seen.add(post.slug)
      if (COPY_FIELDS.every((f) => JSON.stringify(current[f]) === JSON.stringify(post[f]))) continue // already live
      refreshed.push(post)
      continue
    }
    if (known.has(post?.slug)) continue // already on the site
    const problems = validate(post)
    if (seen.has(post?.slug)) problems.push('duplicate slug in feed')
    const clash = LANGS.filter((l) => typeof post?.slug === 'string' && Object.hasOwn(messages[l].json.posts, post.slug))
    if (clash.length) problems.push(`posts.${post.slug} already exists in ${clash.join(', ')} without a POSTS entry`)
    if (problems.length) {
      console.log(`SKIP ${label}: ${problems.join('; ')}`)
      continue
    }
    seen.add(post.slug)
    accepted.push(post)
  }

  if (accepted.length === 0 && refreshed.length === 0) {
    console.log('nothing to publish')
    return
  }

  // Newest first in POSTS; message files append, so the newest ends up last (their convention).
  accepted.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  const writes = []
  if (accepted.length) writes.push([POSTS_FILE, insertPostsEntries(postsSource, accepted)])
  for (const lang of LANGS) {
    const { file, json } = messages[lang]
    for (const p of [...accepted].reverse()) {
      json.posts[p.slug] = { title: p.title, excerpt: p.excerpt, readTime: p.readTime, content: p.content }
    }
    // Refreshes are English only; assigning the existing key keeps its position in the file.
    if (lang === 'en') for (const p of refreshed) json.posts[p.slug] = { title: p.title, excerpt: p.excerpt, readTime: p.readTime, content: p.content }
    if (accepted.length || (lang === 'en' && refreshed.length)) writes.push([file, JSON.stringify(json, null, 2) + '\n'])
  }

  for (const p of accepted) console.log(`PUBLISH ${p.slug} (${p.category}, ${p.date}): ${p.title}`)
  for (const p of refreshed) console.log(`REFRESH ${p.slug}: ${p.title}`)
  if (args.dryRun) {
    console.log(`dry run: would write ${writes.map(([f]) => path.relative(ROOT, f)).join(', ')}`)
    return
  }

  // Write to temp files first, then rename, so a failure cannot leave some files updated.
  for (const [file, content] of writes) fs.writeFileSync(`${file}.tmp`, content)
  for (const [file] of writes) fs.renameSync(`${file}.tmp`, file)
  console.log(`wrote ${writes.map(([f]) => path.relative(ROOT, f)).join(', ')}`)

  if (process.env.GITHUB_OUTPUT) {
    const parts = []
    if (accepted.length) parts.push(`publish ${accepted.map((p) => p.slug).join(', ')}`)
    if (refreshed.length) parts.push(`refresh ${refreshed.map((p) => p.slug).join(', ')}`)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `summary=${parts.join('; ')}\n`)
  }
}

main().catch((e) => fail(e.stack || e.message))
