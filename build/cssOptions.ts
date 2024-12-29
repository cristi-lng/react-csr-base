import { CSSOptions } from 'vite';

export default {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
      additionalData: `
        @use "src/styles/preprocessor/media.scss" as *;
        @use "src/styles/preprocessor/mixins.scss" as *;
      `,
    },
  },
} satisfies CSSOptions;
