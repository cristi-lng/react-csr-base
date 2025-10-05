import type { PluginOption } from 'vite';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react-swc';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

/**
 * Create code checker plugin
 *
 * I used this plugin to see all errors reported in dev mode as well (typescript, eslint)
 * It runs in parallel with the serve process so it shouldn't slow you down
 * https://vite-plugin-checker.netlify.app/
 */
function createChecker() {
  return checker({
    typescript: true,
    eslint: { useFlatConfig: true, lintCommand: 'eslint .' },
    overlay: { initialIsOpen: 'error' },
  });
}

/**
 * Move JS and CSS imports in HTML to the end of the body
 *
 * This is done to avoid blocking the rendering of the index.html,
 * allowing the initial loader to be displayed immediately
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
