import type { BuildOptions } from 'vite';

export default {
  outDir: `${process.cwd()}/dist`,
  emptyOutDir: true,
} satisfies BuildOptions;
