import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      name: 'get-week-info-polyfill',
      fileName: 'index.js',
    },
  },
});
