import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env?.GITHUB_ACTIONS ? "/word-thesaurus" : "/",
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      autoImportComponentCase: "pascal"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
