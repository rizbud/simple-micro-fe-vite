import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "counter-app",
      filename: "counter-app-entry.js",
      shared: ["react", "react-dom"],
      exposes: {
        "./src/App": "./src/App.tsx",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "ESNext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
