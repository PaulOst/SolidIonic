import { defineConfig } from 'vite';
import { resolve } from 'pathe';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@paulost/solid-ionic',
      fileName: format => `solid-ionic.${format}.js`,
      formats: ['es'],
    },
  },
});
