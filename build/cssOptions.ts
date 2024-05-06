import { CSSOptions } from 'vite';

export default {
  preprocessorOptions: {
    scss: {
      additionalData: `
        @use "src/assets/styles/sizes.scss";
        @use "src/assets/styles/colors.scss";
        @use "src/assets/styles/mixins.scss";
      `,
    },
  },
} satisfies CSSOptions;
