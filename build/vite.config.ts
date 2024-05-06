import { defineConfig } from 'vite';
import path from 'path';

import plugins from './plugins';
import cssOptions from './cssOptions';

export default defineConfig({
  root: 'src',
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve('src') },
      { find: /~(.*)/, replacement: path.join(path.resolve('src/features/'), '$1') },
    ],
  },
  publicDir: 'assets/public',
  plugins,
  css: cssOptions,
  build: {
    outDir: `${process.cwd()}/dist`,
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
