import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  assetsInclude: ["**/*.glb", "**/*.jpg", "**/*.png", "**/*.svg", "**/*.mp3"],
  server: {
    hmr: {
      overlay: false,
    },
  },
});
