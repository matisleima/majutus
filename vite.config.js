import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Make sure to import 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/majutus/', // Set this to match your GitHub repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Correctly resolve '@' to the 'src' directory
    }
  }
});
