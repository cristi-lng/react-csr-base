import { defineConfig } from 'vite';
import path from 'path';

import plugins from './plugins';

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
  build: {
    outDir: `${process.cwd()}/dist`,
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
