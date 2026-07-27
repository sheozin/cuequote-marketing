// Simple in-memory rate limiter for server actions.
// Uses a sliding window per key (IP address or email).
// Works within a single Vercel function instance; not shared across instances,
// but provides effective throttling against single-source abuse.

const store = new Map<string, number[]>()

/** Returns true if the key has exceeded the limit within the window. */
export function isRateLimited(key: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now()
  const timestamps = (store.get(key) ?? []).filter((t) => now - t < windowMs)
  if (timestamps.length >= maxRequests) return true
  timestamps.push(now)
  store.set(key, timestamps)
  return false
}
