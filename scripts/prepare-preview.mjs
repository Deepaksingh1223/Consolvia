/**
 * Preview-only post-processing.
 *
 * The static export is uploaded to a host that serves the site from a sub-path,
 * so root-absolute asset URLs (/_next/...) would 404. This script rewrites those
 * URLs in HTML attributes to path-relative ones and injects a small click handler
 * that maps in-app links (/about) to the exported files (about.html).
 *
 * It is NOT part of the production build — `npm run build` output is untouched.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const dir = process.argv[2];
if (!dir) {
  console.error("Usage: node scripts/prepare-preview.mjs <export-dir>");
  process.exit(1);
}

const linkPatch = `<script>(function(){var b=document.baseURI.replace(/[^/]*$/,"");document.addEventListener("click",function(e){var a=e.target&&e.target.closest?e.target.closest("a"):null;if(!a)return;var h=a.getAttribute("href");if(!h||h.charAt(0)!=="/"||h.charAt(1)==="/")return;if(a.target&&a.target!=="_self")return;e.preventDefault();e.stopImmediatePropagation();var p=h.replace(/^\\//,"").replace(/\\/$/,"").split("#")[0];window.location.href=b+(p===""?"index.html":p+".html");},true);})();</script>`;

let count = 0;
for (const file of readdirSync(dir)) {
  if (!file.endsWith(".html")) continue;
  const path = join(dir, file);
  let html = readFileSync(path, "utf8");
  html = html.replace(/(href|src)="\/(_next\/|icon\.svg|robots\.txt|sitemap\.xml)/g, '$1="$2');
  html = html.replace("</head>", `${linkPatch}</head>`);
  writeFileSync(path, html);
  count += 1;
}

