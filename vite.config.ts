/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./src/setupTest.ts"],
    environment: "jsdom",
    coverage: {
      include: ["src/**/**/*.{ts,tsx}"],
      exclude: [
        "src/**/**/main.tsx",
        "src/setupTest.ts",
        "src/characters/store/hooks.ts",
        "src/characters/store/store.ts",
      ],
      reporter: "lcov",
    },
  },
});
