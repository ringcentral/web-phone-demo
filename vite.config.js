import { resolve } from "node:path";

import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "./",
  server: {
    port: 1234,
    hmr: false,
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, "src/index.html"),
        callback: resolve(import.meta.dirname, "src/callback.html"),
      },
    },
  },
});
