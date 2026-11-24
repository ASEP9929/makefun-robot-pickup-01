import { writeFileSync, mkdirSync } from "node:fs";

// FINAL v3: kept the v2 line after a second read — the setup names the
// machine (firmware update, reboot), the turn inverts it (a reboot that
// breaks nothing), and every word earns its place. Charming, not creepy.
const LINE =
  "Are you a firmware update? Because I rebooted the second you walked in — and for once, nothing broke.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
