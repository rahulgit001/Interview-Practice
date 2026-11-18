import { readFile } from "node:fs/promises";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const devIndexHtml = await readFile(new URL("./index.template.html", import.meta.url), "utf8");

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  plugins: [
    react(),
    {
      name: "serve-source-index",
      transformIndexHtml(html) {
        return command === "serve" ? devIndexHtml : html;
      },
    },
  ],
}));
