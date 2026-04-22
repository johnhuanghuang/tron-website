// @ts-check
const fs = require("fs");
const path = require("path");

const CACHE_DIR = path.join(__dirname, "cache");
const REQUEST_DELAY_MS = 1000;

// Respect system proxy for Node.js fetch
const HttpsProxyAgent = require("/Users/john/.openclaw/workspace/projects/tron-website/node_modules/https-proxy-agent").default || require("/Users/john/.openclaw/workspace/projects/tron-website/node_modules/https-proxy-agent");

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Fetch a page with rate limiting, retry logic, and caching
 * @param {string} url
 * @param {number} [retries=3]
 * @param {number} [delay=REQUEST_DELAY_MS]
 * @returns {Promise<{url: string, html: string, fromCache: boolean}>}
 */
async function fetchPage(url, retries = 3, delay = REQUEST_DELAY_MS) {
  const cacheFile = path.join(
    CACHE_DIR,
    Buffer.from(url).toString("base64") + ".html"
  );

  // Check cache first
  if (fs.existsSync(cacheFile)) {
    const cached = fs.readFileSync(cacheFile, "utf-8");
    return { url, html: cached, fromCache: true };
  }

  // Wait before making request (rate limiting)
  await sleep(delay);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`  Fetching (attempt ${attempt}/${retries}): ${url}`);

      const response = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9",
        },
        agent: httpsProxyAgent,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const html = await response.text();

      // Cache the result
      fs.writeFileSync(cacheFile, html);

      return { url, html, fromCache: false };
    } catch (error) {
      const isLastAttempt = attempt === retries;
      if (isLastAttempt) {
        console.error(`  Failed to fetch ${url} after ${retries} attempts:`, error.message);
        throw error;
      }

      // Exponential backoff
      const backoff = delay * Math.pow(2, attempt - 1);
      console.log(`  Retrying in ${backoff}ms...`);
      await sleep(backoff);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { fetchPage };
