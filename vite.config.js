// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "src/index.html"),
        ballin: resolve(__dirname, "src/ballin.html"),
        cc: resolve(__dirname, "src/cc.html"),
        smaks: resolve(__dirname, "src/smaks.html"),
        gb: resolve(__dirname, "src/gb.html"),
        danishgallery: resolve(__dirname, "src/danishgallery.html"),
      },
    },
  },
});
