import { BuildOptions } from 'vite';

function shouldInlineAsset(filePath: string, fileContent: Buffer) {
  const inlineLimit = 4096; // 4KB
  const isFont = filePath.endsWith('.woff2');
  return !isFont && fileContent.length < inlineLimit;
}

export default {
  assetsInlineLimit: shouldInlineAsset,
  outDir: `${process.cwd()}/dist`,
  emptyOutDir: true,
} satisfies BuildOptions;
