import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const files = execSync("rg --files -g '*.js' -g '*.jsx' app components", { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter((f) => !f.includes("app/api/"));

// Specific rewrites first (longest / most specific), then bare token swaps.
const specific = [
  ["bg-white/85", "bg-base/85"],
  ["bg-white/90", "bg-base/90"],
  ["bg-white/70", "bg-white/[0.04]"],
  ["hover:bg-white/50", "hover:bg-white/[0.07]"],
  ["hover:bg-shell/70", "hover:bg-panel"],
  ["text-ink/[0.035]", "text-white/[0.05]"],
  ["placeholder:text-muted/60", "placeholder:text-dim/80"],
  ["text-muted/70", "text-dim"],
  ["border-line/70", "border-hair"],
  ["text-body/80", "text-copy/85"],
];

// Bare tokens: replaced only when not followed by / or - or word char.
const bare = [
  ["bg-white", "bg-elev"],
  ["bg-shell", "bg-panel"],
  ["bg-ink", "bg-deep"],
  ["text-ink", "text-head"],
  ["text-body", "text-copy"],
  ["text-muted", "text-dim"],
  ["border-line", "border-hair"],
  ["divide-line", "divide-hair"],
  ["spotlight", "spotlight-dark"],
];

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, "utf8");
  let out = before;
  for (const [from, to] of specific) out = out.split(from).join(to);
  for (const [from, to] of bare) {
    out = out.replace(new RegExp(`(?<![\\w-])${from}(?![\\w/[-])`, "g"), to);
  }
  // spotlight-dark may have been double-mapped
  out = out.replace(/spotlight-dark-dark/g, "spotlight-dark");
  if (out !== before) {
    writeFileSync(file, out);
    changed += 1;
  }
}
console.log(`rewrote ${changed}/${files.length} files`);
