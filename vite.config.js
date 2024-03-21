import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import history from 'connect-history-api-fallback';

export default defineConfig({
  plugins: [react(), svgrPlugin()],
  build: {
    minify: true,
    watch: {
      include: 'src/**',
      exclude: 'node_modules/**, .git/**, dist/**, .vscode/**',
    },
    outDir: 'public',
    copyPublicDir: false,
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: `index.js`,
      },
    },
  },
  server: {
    // Include middleware for SPA routing fallback to index.html
    setupMiddlewares: (middlewares, { app }) => {
      app.use(history());
      return middlewares;
    },
  },
});
