// Simple in-memory cache for client-side API calls
class SimpleCache {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();

  set(key: string, data: any, ttlSeconds: number = 300) {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttlSeconds * 1000
    });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear() {
    this.cache.clear();
  }
}

export const apiCache = new SimpleCache();

// Cached fetch wrapper
export async function cachedFetch(url: string, options?: RequestInit, ttlSeconds: number = 300) {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  
  // Try to get from cache first
  const cached = apiCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  // Fetch from network
  const response = await fetch(url, options);
  const data = await response.json();

  // Cache the result
  apiCache.set(cacheKey, data, ttlSeconds);
  
  return data;
}