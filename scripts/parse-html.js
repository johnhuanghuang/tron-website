// @ts-check
const Turndown = require("turndown");

const td = new Turndown({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletMarker: "-",
});

/**
 * Convert HTML content to clean Markdown
 * @param {string} html
 * @returns {string}
 */
function htmlToMarkdown(html) {
  // Remove unwanted elements
  let cleaned = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\sclass="[^"]*"/g, "")
    .replace(/\sid="[^"]*"/g, "");

  // Convert relative URLs to absolute
  cleaned = cleaned.replace(
    /href="\/(?!\/)/g,
    'href="https://developers.tron.network/'
  );
  cleaned = cleaned.replace(
    /src="\/(?!\/)/g,
    'src="https://developers.tron.network/'
  );

  let markdown = td.turndown(cleaned);

  // Clean up extra whitespace
  markdown = markdown
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^\s+$/gm, "")
    .trim();

  return markdown;
}

/**
 * Generate URL-safe slug from text
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

module.exports = { htmlToMarkdown, slugify };
