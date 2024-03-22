/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3500,
    open: true,
  },
  test: {
    globals: true,
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom',
  },
  plugins: [react()],
});
