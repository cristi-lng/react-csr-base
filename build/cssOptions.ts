import { CSSOptions } from 'vite';

export default {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @use "src/styles/preprocessor/media.scss" as *;
        @use "src/styles/preprocessor/mixins.scss" as *;
      `,
    },
  },
} satisfies CSSOptions;
