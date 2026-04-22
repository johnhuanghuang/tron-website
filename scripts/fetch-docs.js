// @ts-check
/**
 * TRON Developer Documentation Fetcher
 *
 * Fetches documentation from developers.tron.network and converts to local Markdown.
 *
 * Usage: node scripts/fetch-docs.js
 */

const fs = require("fs");
const path = require("path");
const { fetchPage } = require("./fetch-page");
const { htmlToMarkdown } = require("./parse-html");

const BASE_URL = "https://developers.tron.network";
const OUTPUT_DIR = path.join(__dirname, "..", "content", "docs");

// Doc structure to fetch - expandable
const DOCS_TO_FETCH = [
  {
    category: "Getting Started",
    categoryId: "get-started",
    pages: [
      { slug: "introduction", title: "Introduction to TRON" },
      { slug: "quick-start", title: "Quick Start" },
      { slug: "environment-setup", title: "Environment Setup" },
      { slug: "create-account", title: "Create Your First Account" },
      { slug: "first-transaction", title: "Send Your First Transaction" },
      { slug: "deploy-contract", title: "Deploy Your First Contract" },
    ],
  },
  {
    category: "Smart Contracts",
    categoryId: "smart-contracts",
    pages: [
      { slug: "solidity-overview", title: "Solidity Overview" },
      { slug: "tron-virtual-machine", title: "TRON Virtual Machine (TVM)" },
      { slug: "contract-development", title: "Contract Development" },
      { slug: "contract-security", title: "Contract Security Best Practices" },
      { slug: "contract-deployment", title: "Deployment & Verification" },
      { slug: "gas-optimization", title: "Gas Optimization" },
    ],
  },
  {
    category: "TRC Tokens",
    categoryId: "trc-tokens",
    pages: [
      { slug: "trc10-overview", title: "TRC-10 Token Standard" },
      { slug: "trc20-overview", title: "TRC-20 Token Standard" },
      { slug: "create-trc20", title: "Create a TRC-20 Token" },
      { slug: "trc721-overview", title: "TRC-721 NFT Standard" },
    ],
  },
  {
    category: "API Reference",
    categoryId: "api-reference",
    pages: [
      { slug: "http-api", title: "TRON HTTP API" },
      { slug: "wallet-api", title: "Wallet API" },
      { slug: "event-subscription", title: "Event Subscription" },
    ],
  },
  {
    category: "Tools",
    categoryId: "tools",
    pages: [
      { slug: "tronbox", title: "TronBox" },
      { slug: "tronweb", title: "TronWeb" },
      { slug: "trongrid", title: "TronGrid" },
    ],
  },
];

/**
 * @param {string} docSlug
 * @param {string} docTitle
 * @param {string} category
 * @returns {Promise<{slug: string, title: string, category: string, order: number, content: string, lastUpdated: string}|null>}
 */
async function fetchDoc(docSlug, docTitle, category) {
  const url = `${BASE_URL}/docs/${docSlug}`;

  try {
    const result = await fetchPage(url);
    const markdown = htmlToMarkdown(result.html);

    // Extract main content (find first h1 heading)
    const contentStart = markdown.indexOf("# ");
    const content = contentStart > -1 ? markdown.slice(contentStart) : markdown;

    return {
      slug: docSlug,
      title: docTitle,
      category,
      order: 0,
      content,
      lastUpdated: new Date().toISOString().split("T")[0],
    };
  } catch (error) {
    console.error(`  Failed to fetch: ${url}`);
    return null;
  }
}

/**
 * @param {{slug: string, title: string, category: string, order: number, content: string, lastUpdated?: string}} doc
 */
function saveDoc(doc) {
  const frontmatter = `---
title: "${doc.title}"
category: ${doc.category}
order: ${doc.order}
lastUpdated: ${doc.lastUpdated || ""}
---

> **Source:** [View on developers.tron.network](${BASE_URL}/docs/${doc.slug})
> This content is fetched at build time.

---

`;

  const filePath = path.join(OUTPUT_DIR, `${doc.slug}.md`);
  fs.writeFileSync(filePath, frontmatter + doc.content);
  console.log(`  Saved: ${doc.slug}.md`);
}

async function main() {
  console.log("TRON Documentation Fetcher\n");
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  /** @type {{categories: {id: string, label: string, pages: {slug: string, title: string}[]}[]}} */
  const docIndex = { categories: [] };

  for (const category of DOCS_TO_FETCH) {
    console.log(`\nFetching: ${category.category}`);
    docIndex.categories.push({
      id: category.categoryId,
      label: category.category,
      pages: [],
    });

    const catIndex = docIndex.categories.length - 1;

    for (let i = 0; i < category.pages.length; i++) {
      const page = category.pages[i];
      const doc = await fetchDoc(page.slug, page.title, category.category);

      if (doc) {
        doc.order = i + 1;
        saveDoc(doc);
        docIndex.categories[catIndex].pages.push({
          slug: doc.slug,
          title: doc.title,
        });
      } else {
        // Add placeholder if fetch failed
        docIndex.categories[catIndex].pages.push({
          slug: page.slug,
          title: page.title,
        });
      }
    }
  }

  // Save index
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(docIndex, null, 2));
  console.log(`\nIndex saved: ${indexPath}`);
  console.log("\nDone! Run `npm run build` to see the updated docs.");
}

main().catch(console.error);
