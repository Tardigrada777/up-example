import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      domain: resolve(__dirname, "./src/domain"),
      shared: resolve(__dirname, "./src/shared"),
      entities: resolve(__dirname, "./src/entities"),
    },
  },
});
