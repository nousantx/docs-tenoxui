import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import mdx from "@mdx-js/rollup";
import path from "node:path";

export default defineConfig({
  plugins: [{ enforce: "pre", ...mdx() }, react(), generouted()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@styler": path.resolve(__dirname, "./src/style/styler.ts"),
      "@tips": path.resolve(__dirname, "./src/components/tips.tsx"),
      "@code": path.resolve(__dirname, "./src/components/code.tsx"),
      "@nav": path.resolve(__dirname, "./src/components/docs-navigation.tsx"),
    }
  }
});
