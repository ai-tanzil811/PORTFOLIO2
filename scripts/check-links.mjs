import fs from "node:fs";
import path from "node:path";

const seen = new Set();
function walk(target) {
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target)) walk(path.join(target, entry));
  } else if (target.endsWith(".ts") || target.endsWith(".tsx") || target.endsWith(".md")) {
    const text = fs.readFileSync(target, "utf8");
    for (const match of text.matchAll(/https?:\/\/[^\s"'`),]+/g)) seen.add(match[0].replace(/[.;]+$/, ""));
  }
}
for (const root of ["src", "README.md"]) if (fs.existsSync(root)) walk(root);
let failures = 0;
for (const url of [...seen].sort()) {
  const hostname = new URL(url).hostname;
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "ai-tanzil811.github.io" || hostname === "schema.org") continue;
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (response.ok) console.log(`PASS ${response.status} ${url}`);
    else {
      const get = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(15000) });
      if (get.ok) console.log(`PASS ${get.status} ${url}`);
      else { console.error(`FAIL ${get.status} ${url}`); failures++; }
    }
  } catch (error) {
    console.log(`UNREACHABLE ${url} ${error.message}`);
  }
}
if (failures) process.exit(1);
