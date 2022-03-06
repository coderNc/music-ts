import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from '@rollup/plugin-alias'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: {
        '@': resolve(__dirname, 'src'),
        'components': resolve(__dirname, 'src/components')
      }
    }),
  ],
});
