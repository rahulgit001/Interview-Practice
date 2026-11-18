import { cp, copyFile, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const templatePath = path.join(root, "index.template.html");
const indexPath = path.join(root, "index.html");
const distPath = path.join(root, "dist");
const assetsPath = path.join(root, "assets");

await copyFile(templatePath, indexPath);

try {
  const viteCliPath = path.join(root, "node_modules/vite/bin/vite.js");
  const result = spawnSync(process.execPath, [viteCliPath, "build"], {
    cwd: root,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`Vite build failed with status ${result.status}.`);
  }

  await copyFile(path.join(distPath, "index.html"), indexPath);
  await rm(assetsPath, { recursive: true, force: true });
  await cp(path.join(distPath, "assets"), assetsPath, { recursive: true });
} catch (error) {
  await copyFile(templatePath, indexPath);
  throw error;
}
