module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'prettier',
  ],
  ignorePatterns: ['build', 'dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['boundaries'],
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
      },
    },
  },
  rules: {
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
};
