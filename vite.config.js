import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/',
  build: {
    outDir: 'dist', // Default output directory
    rollupOptions: {
      output: {
        // Define naming convention for the assets
        assetFileNames: `assets/[name].[hash].[ext]`,
        chunkFileNames: `assets/[name].[hash].js`,
        entryFileNames: `assets/[name].[hash].js`,
      }
    }
  },
  resolve: {
    alias: {
      // Setup an alias for the src directory
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
