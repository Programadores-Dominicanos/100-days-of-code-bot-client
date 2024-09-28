import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias_path from "./alias.config";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: alias_path,
  },
});
