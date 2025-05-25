import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["tests/**/*.{test,spec}.js"],
    exclude: ["**/node_modules/**", "**/tests/e2e/**"],
  },
});
