import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { ssgPlugin } from '@wroud/vite-plugin-ssg';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssgPlugin(), tailwindcss()],
  root: 'src',
  publicDir: '../public',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
    copyPublicDir: true,
    rollupOptions: {
      input: {
        index: path.resolve('src/index.tsx') + '?ssg-entry',
      },
    },
  },
  esbuild: {
    legalComments: 'none',
  },
});
