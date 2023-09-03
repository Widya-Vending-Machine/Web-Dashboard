import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Web-Dashboard',

  plugins: [
    // Speed up your Vite dev server with SWC
    // https://github.com/vitejs/vite-plugin-react-swc
    react(),
    // File system based routing for Vue 3 / React / Solid applications using Vite
    // https://github.com/hannoeru/vite-plugin-pages
    pages({
      dirs: 'src/pages',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
});
