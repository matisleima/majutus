// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
//
// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   base: '/',
//   build: {
//     outDir: 'dist', // Default output directory
//     rollupOptions: {
//       output: {
//         // Define naming convention for the assets
//         assetFileNames: `assets/[name].[hash].[ext]`,
//         chunkFileNames: `assets/[name].[hash].js`,
//         entryFileNames: `assets/[name].[hash].js`,
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       // Setup an alias for the src directory
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// });
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Make sure to import 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Set this to match your GitHub repository name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Correctly resolve '@' to the 'src' directory
    }
  }
});
