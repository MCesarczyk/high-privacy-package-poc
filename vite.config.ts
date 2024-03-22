import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';

export default defineConfig({
  server: {
    port: 3500,
    open: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'high-privacy-package-poc',
      // formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts(),
    cssInjectedByJsPlugin({
      relativeCSSInjection: true,
    }),
  ],
});
