import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "node:path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/cfHelpers"],
      rollupTypes: true,
    }),
  ],
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/cfHelpers/index.ts"),
      name: "PiercingLibrary",
      formats: ["es"],
      fileName: (format) => `index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
