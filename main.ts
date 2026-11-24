// Alien Field Notes: The Two Day Earth Review
// Writes one original line — an alien tourist's review of planet Earth —
// to /output/entry.txt. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Lovely planet. The locals feed their dogs better than their neighbours, worship small glowing rectangles, and queue politely for coffee. 5 stars — would invade again, gently.";

const MAX_CHARS = 200;

function codePointLength(text: string): number {
  return [...text].length;
}

const length = codePointLength(ENTRY);

if (length < 1 || length > MAX_CHARS) {
  throw new Error(
    `entry must be 1–${MAX_CHARS} characters, got ${length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line (no CR or LF)");
}
if (/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(ENTRY)) {
  throw new Error("entry must not contain control characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${length} characters)`);
