/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // Enable CSS minification
    minify: 'esbuild', // Default, but you can specify it
    rollupOptions: {
      output: {
        // Improve long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },

    target: ['es2015'], // Reduce size by targeting modern browsers if possible
    // Enable source maps in production (can be helpful, but remove for production if not needed)
    sourcemap: false,
  },
  css: {
    postcss: './postcss.config.js',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      all: false,
      enabled: true,
      exclude: ['**/setup.ts', '**/msw-utils.tsx', '**/test-utils.tsx'],
    },
  },
});
