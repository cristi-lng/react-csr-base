import { PluginOption } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

/**
 * Create code checker plugin
 */
function createChecker() {
  return checker({
    typescript: true,
    eslint: { lintCommand: 'eslint . --ext ts,tsx' },
    overlay: { initialIsOpen: 'error' },
  });
}

/**
 * Move JS and CSS imports in HTML to the end of the body
 */
function moveJsCssToBody(): PluginOption {
  const toMoveRegex = /<script.*\.js.*<\/script>|<link.*\.css.*>/g;

  return {
    name: 'move-js-css-body',
    transformIndexHtml(html: string) {
      let toMove = '';
      let newHtml = html.replace(toMoveRegex, (match) => {
        toMove += match;
        return '';
      });
      newHtml = newHtml.replace('</body>', `${toMove}</body>`);
      return newHtml;
    },
  };
}

export default [createChecker(), react(), moveJsCssToBody(), ViteMinifyPlugin()];
