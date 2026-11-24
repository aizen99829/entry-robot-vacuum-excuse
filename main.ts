// The Robot Vacuum's Best Excuse — program/v1 entry.
//
// Writes a single line (<=140 chars) to /output/entry.txt: the funniest
// excuse a robot vacuum gives for missing a spot. Deterministic: no
// network, no randomness, byte-identical output on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My bumper tapped the table leg, my map promoted it to a load-bearing wall, and that crumb now lives in another room.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
