// @ts-check
/**
 * TRON Developer Documentation Fetcher
 * Uses curl for fetching (respects system proxy automatically).
 * Run: node scripts/fetch-docs-full.js
 */

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://developers.tron.network";
const OUTPUT_DIR = path.join(__dirname, "..", "content", "docs");
const CACHE_DIR = path.join(__dirname, "cache");

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

const proxyUrl = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY;
console.log("Proxy: " + (proxyUrl || "none (direct)"));

/**
 * Fetch URL using curl (respects system proxy)
 */
function curl(url) {
  return new Promise(function(resolve, reject) {
    var args = [
      "-s", "--max-time", "15", "-L",
      "--user-agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15_7) AppleWebKit/537.36"
    ];
    if (proxyUrl) { args.push("-x", proxyUrl); }
    args.push(url);

    var child = spawn("curl", args, { encoding: "utf-8" });
    var stdout = "";
    var stderr = "";
    child.stdout.on("data", function(d) { stdout += d; });
    child.stderr.on("data", function(d) { stderr += d; });
    child.on("close", function(code) {
      if (code === 0) resolve(stdout);
      else reject(new Error(stderr || "curl exit:" + code));
    });
    child.on("error", reject);
    setTimeout(function() { child.kill(); reject(new Error("timeout")); }, 20000);
  });
}

function extractAllPages(apiData) {
  var pages = [];
  function walk(categories) {
    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i];
      if (cat.pages && cat.pages.length > 0) {
        for (var j = 0; j < cat.pages.length; j++) {
          var page = cat.pages[j];
          if (!page.isBodyEmpty && page.renderable && page.renderable.status && page.type !== "link") {
            pages.push({ slug: page.slug, title: page.title, uri: page.uri, category: cat.title, updatedAt: page.updatedAt });
          }
        }
        walk(cat.pages);
      }
    }
  }
  if (apiData.guides) walk(apiData.guides);
  if (apiData.referenceCategories) walk(apiData.referenceCategories);
  if (apiData.reference) walk(apiData.reference);
  return pages;
}

function uriToSlug(uri) {
  return uri.replace(/^\/branches\/[^/]+\//, "").replace(/\//g, "-");
}

function stripTags(str) {
  return str.replace(/<[^>]+>/g, "");
}

function htmlToMarkdown(html) {
  var m = html;
  m = m.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");
  m = m.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  m = m.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "");
  m = m.replace(/<!--[\s\S]*?-->/g, "");

  m = m.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, function(_, t) { return "# " + stripTags(t).trim() + "\n\n"; });
  m = m.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, function(_, t) { return "## " + stripTags(t).trim() + "\n\n"; });
  m = m.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, function(_, t) { return "### " + stripTags(t).trim() + "\n\n"; });
  m = m.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, function(_, t) { return "#### " + stripTags(t).trim() + "\n\n"; });

  m = m.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, function(_, code) {
    return "\n```\n" + stripTags(code).trim() + "\n```\n";
  });
  m = m.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, function(_, c) { return "`" + stripTags(c) + "`"; });

  m = m.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, function(_, t) { return stripTags(t).trim() + "\n\n"; });
  m = m.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, function(_, t) { return "**" + stripTags(t) + "**"; });
  m = m.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, function(_, t) { return "**" + stripTags(t) + "**"; });
  m = m.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, function(_, t) { return "*" + stripTags(t) + "*"; });
  m = m.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, function(_, t) { return "*" + stripTags(t) + "*"; });

  m = m.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, function(_, href, text) {
    return "[" + stripTags(text) + "](" + href + ")";
  });

  m = m.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, function(_, items) {
    var result = "";
    var matches = items.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (matches) {
      for (var k = 0; k < matches.length; k++) {
        var itemContent = matches[k].replace(/<li[^>]*>/, "").replace(/<\/li>/, "");
        result += "- " + stripTags(itemContent).trim() + "\n";
      }
    }
    return result + "\n";
  });

  m = m.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, function(_, items) {
    var result = "";
    var matches = items.match(/<li[^>]*>([\s\S]*?)<\/li>/gi);
    if (matches) {
      for (var k = 0; k < matches.length; k++) {
        var itemContent = matches[k].replace(/<li[^>]*>/, "").replace(/<\/li>/, "");
        result += (k + 1) + ". " + stripTags(itemContent).trim() + "\n";
      }
    }
    return result + "\n";
  });

  m = m.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, function(_, t) { return "> " + stripTags(t).trim() + "\n\n"; });
  m = m.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, function(_, t) { return stripTags(t) + "\n"; });
  m = m.replace(/<br\s*\/?>/gi, "\n");
  m = m.replace(/<[^>]+>/g, "");
  m = m.replace(/\n{3,}/g, "\n\n").replace(/^\s+|\s+$/g, "");

  return m;
}

async function main() {
  console.log("\nFetching main index...");
  var html;
  try {
    html = await curl(BASE_URL + "/");
  } catch (err) {
    console.error("Failed to fetch index: " + err.message);
    process.exit(1);
  }

  var jsonMatch = html.match(/window\.__INITIAL_DATA__\s*=\s*(\{[\s\S]+?\})\s*</);
  if (!jsonMatch) {
    console.error("Could not find __INITIAL_DATA__");
    process.exit(1);
  }

  var jsonStr = jsonMatch[1];
  var braceCount = 0, inString = false, end = jsonStr.length;
  for (var i = 0; i < jsonStr.length; i++) {
    var c = jsonStr[i];
    if (c === '"' && jsonStr[i-1] !== "\\") inString = !inString;
    if (!inString) {
      if (c === "{") braceCount++;
      if (c === "}") { braceCount--; if (braceCount === 0) { end = i + 1; break; } }
    }
  }
  jsonStr = jsonStr.slice(0, end);
  var apiData = JSON.parse(jsonStr);

  var pages = extractAllPages(apiData);
  console.log("Found " + pages.length + " pages to fetch\n");

  var results = { success: 0, failed: 0, categories: {} };
  var seen = {};

  for (var idx = 0; idx < pages.length; idx++) {
    var page = pages[idx];
    var slug = uriToSlug(page.uri);
    if (seen[slug]) continue;
    seen[slug] = true;

    var url = BASE_URL + page.uri;
    process.stdout.write("[" + (idx + 1) + "/" + pages.length + "] " + page.slug + "... ");

    try {
      var pageHtml = await curl(url);
      var markdown = htmlToMarkdown(pageHtml);
      var h1Idx = markdown.indexOf("# ");
      var content = h1Idx > -1 ? markdown.slice(h1Idx) : markdown;

      var frontmatter = "---\ntitle: \"" + page.title + "\"\ncategory: \"" + page.category + "\"\nslug: \"" + slug + "\"\nupdatedAt: \"" + (page.updatedAt || "") + "\"\n---\n\n";

      fs.writeFileSync(path.join(OUTPUT_DIR, slug + ".md"), frontmatter + content);
      console.log("✓");
      results.success++;

      var cat = page.category;
      if (!results.categories[cat]) results.categories[cat] = [];
      results.categories[cat].push({ slug: slug, title: page.title });
    } catch (err) {
      console.log("FAILED: " + err.message.slice(0, 60));
      results.failed++;
    }
  }

  var index = {
    categories: Object.keys(results.categories).map(function(name) {
      return { id: name.toLowerCase().replace(/\s+/g, "-"), label: name, pages: results.categories[name] };
    })
  };
  fs.writeFileSync(path.join(OUTPUT_DIR, "index.json"), JSON.stringify(index, null, 2));

  console.log("\nDone! Saved " + results.success + " pages, " + results.failed + " failed.");
  console.log("\nRun `npm run build` to see updated docs.");
}

main().catch(console.error);