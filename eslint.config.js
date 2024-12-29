import tsEslint from 'typescript-eslint';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import configPrettier from 'eslint-config-prettier';
import globals from 'globals';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tanstackQueryPlugin from '@tanstack/eslint-plugin-query';
import boundariesPlugin from 'eslint-plugin-boundaries';

export default tsEslint.config(
  { ignores: ['build', 'dist', 'eslint.config.js'] },
  {
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      configPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooksPlugin,
      '@tanstack/query': tanstackQueryPlugin,
      boundaries: boundariesPlugin,
    },
    settings: {
      'boundaries/elements': [
        {
          type: 'global',
          pattern: 'src/!(features)/**',
          mode: 'full',
        },
        {
          type: 'publicFeature',
          pattern: 'src/features/*/index.*',
          mode: 'full',
          capture: ['featureName'],
        },
        {
          type: 'privateFeature',
          pattern: 'src/features/*/!(index.*)/**',
          mode: 'full',
          capture: ['featureName'],
        },
      ],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json',
        },
      },
    },
    /**
     * Here you can impose custom eslint rules that you want to be followed across the app.
     * The following rules are the minimum that I would recommend.
     */
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      ...tanstackQueryPlugin.configs.recommended.rules,
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['axios'],
              message: 'Please use axiosProvider.',
            },
            {
              group: ['**/./**', '**/../**', '!./*.scss'],
              message: 'Relative imports are not allowed.',
            },
          ],
        },
      ],
      'boundaries/element-types': [
        2,
        {
          default: 'allow',
          rules: [
            {
              from: ['global'],
              disallow: ['privateFeature'],
              message: 'Cannot import private modules from a feature. Use the public export.',
            },
            {
              from: ['publicFeature', 'privateFeature'],
              disallow: [['privateFeature', { featureName: '!${featureName}' }]],
              message: 'Cannot import private modules from a different feature. Use the public export.',
            },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ExportDefaultDeclaration',
          message: 'Please use named exports',
        },
      ],
    },
  },
);
