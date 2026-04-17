type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();
const activeRequests = new Map<string, number>();

function now() {
  return Date.now();
}

export function takeRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { allowed: boolean; retryAfterSeconds: number } {
  const currentTime = now();
  const currentBucket = buckets.get(key);

  if (!currentBucket || currentBucket.resetAt <= currentTime) {
    buckets.set(key, {
      count: 1,
      resetAt: currentTime + windowMs,
    });

    return {
      allowed: true,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (currentBucket.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((currentBucket.resetAt - currentTime) / 1000)),
    };
  }

  currentBucket.count += 1;
  buckets.set(key, currentBucket);

  return {
    allowed: true,
    retryAfterSeconds: Math.max(1, Math.ceil((currentBucket.resetAt - currentTime) / 1000)),
  };
}

export function beginSingleFlight(key: string): boolean {
  if (activeRequests.has(key)) {
    return false;
  }

  activeRequests.set(key, now());
  return true;
}

export function endSingleFlight(key: string) {
  activeRequests.delete(key);
}
