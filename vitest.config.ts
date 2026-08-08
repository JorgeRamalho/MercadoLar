import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const projectRoot = resolve(__dirname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src'),
      '@react': resolve(projectRoot, 'src'),
      '@typescript': resolve(projectRoot, 'src'),
      '@css': resolve(projectRoot, 'src/styles'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
