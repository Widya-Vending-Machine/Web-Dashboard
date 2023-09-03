// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///D:/Andri/github/widya-vending-machine/Web-Dashboard/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Andri/github/widya-vending-machine/Web-Dashboard/node_modules/@vitejs/plugin-react-swc/index.mjs";
import pages from "file:///D:/Andri/github/widya-vending-machine/Web-Dashboard/node_modules/vite-plugin-pages/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Andri\\github\\widya-vending-machine\\Web-Dashboard";
var vite_config_default = defineConfig({
  plugins: [
    // Speed up your Vite dev server with SWC
    // https://github.com/vitejs/vite-plugin-react-swc
    react(),
    // File system based routing for Vue 3 / React / Solid applications using Vite
    // https://github.com/hannoeru/vite-plugin-pages
    pages({
      dirs: "src/pages"
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxBbmRyaVxcXFxnaXRodWJcXFxcd2lkeWEtdmVuZGluZy1tYWNoaW5lXFxcXFdlYi1EYXNoYm9hcmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFuZHJpXFxcXGdpdGh1YlxcXFx3aWR5YS12ZW5kaW5nLW1hY2hpbmVcXFxcV2ViLURhc2hib2FyZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQW5kcmkvZ2l0aHViL3dpZHlhLXZlbmRpbmctbWFjaGluZS9XZWItRGFzaGJvYXJkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcyc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgLy8gU3BlZWQgdXAgeW91ciBWaXRlIGRldiBzZXJ2ZXIgd2l0aCBTV0NcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZWpzL3ZpdGUtcGx1Z2luLXJlYWN0LXN3Y1xuICAgIHJlYWN0KCksXG4gICAgLy8gRmlsZSBzeXN0ZW0gYmFzZWQgcm91dGluZyBmb3IgVnVlIDMgLyBSZWFjdCAvIFNvbGlkIGFwcGxpY2F0aW9ucyB1c2luZyBWaXRlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXG4gICAgcGFnZXMoe1xuICAgICAgZGlyczogJ3NyYy9wYWdlcycsXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcbiAgICB9XG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVYsU0FBUyxlQUFlO0FBQzdXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLFdBQVc7QUFIbEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUE7QUFBQSxJQUdQLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFHTixNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
