/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    // ensure proper minification
    minify: 'esbuild',
    // sourcemap = true provides easier debugging since provides insight into the original codebase;
    // BUT it increases the build size and could be a potential security risk.
    // It's up to the team but a secure approach would be to set it to false for Production builds but true for development.
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      all: false,
      enabled: true,
      exclude: ['**/setup.ts', '**/utils.tsx'],
    },
  },
});
