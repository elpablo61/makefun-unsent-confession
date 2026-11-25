import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "To: Grandma",
  "I sold the gold bracelet you gave me for my graduation to pay rent in 2022, I wear a fake one when I visit.",
].join("\n");

const lines = entry.split("\n");
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry must be 1-260 characters, got ${entry.length}`);
}
if (lines.length !== 2 || !lines[0].startsWith("To: ") || lines[1].length > 200) {
  throw new Error("entry must be a To: line plus one message line of at most 200 characters");
}

validateConfessionEntry(entry);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");


// Gate validation: the confession entry must satisfy the sprint gates
// (1–260 characters total, at most 2 lines) before it is written out.
// Throws a descriptive error instead of silently writing an invalid entry.
export function validateConfessionEntry(entry: string): void {
  const length = [...entry].length;
  if (length < 1 || length > 260) {
    throw new Error(
      `entry gate failed: length ${length} is outside 1–260 characters`,
    );
  }
  const lines = entry.split("\n");
  if (lines.length > 2) {
    throw new Error(
      `entry gate failed: ${lines.length} lines, maximum is 2`,
    );
  }
  if (lines.some((line) => line.trim().length === 0)) {
    throw new Error("entry gate failed: entry contains an empty line");
  }
}
