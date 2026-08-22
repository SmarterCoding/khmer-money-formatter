import {
  defineConfig,
} from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  format: [
    "esm",
    "cjs",
    "iife",
  ],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  globalName: "KhmerMoneyFormatter",
  treeshake: true,
  splitting: false,
  outExtension({
    format,
  }) {
    if (format === "cjs") {
      return {
        js: ".cjs",
      };
    }
    if (format === "iife") {
      return {
        js: ".iife.js",
      };
    }
    return {
      js: ".js",
    };
  },
});