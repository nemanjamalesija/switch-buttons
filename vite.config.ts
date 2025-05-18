// import { dirname, resolve } from "node:path";
// import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import dts from "vite-plugin-dts";

// const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // plugins: [vue(), dts({ rollupTypes: true })],
  plugins: [vue()],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, "src/lib/index.ts"),
  //     fileName: "index",
  //     formats: ["es"],
  //   },
  //   rollupOptions: {
  //     external: ["vue"],
  //   },
  // },
});
