import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // You might set this to '/<repo-name>/' if not at root.
  build: {
    outDir: 'dist', // This is the default, but ensure it's set.
  },
});
