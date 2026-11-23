import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the pre-rendered newspaper image next to this file into the output
// folder (./output by default, or the folder named by the first argument).
// Deterministic, offline, no dependencies.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, process.argv[2] ?? "output");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("copied entry.png to " + (process.argv[2] ?? "output") + "/entry.png");
