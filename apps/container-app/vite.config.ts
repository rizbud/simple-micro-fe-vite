import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container-app",
      filename: "container-app-entry.js",
      shared: ["react", "react-dom"],
      remotes: {
        "counter-app": "http://localhost:3001/assets/counter-app-entry.js",
        "popup-app": "http://localhost:3002/assets/popup-app-entry.js",
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
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
