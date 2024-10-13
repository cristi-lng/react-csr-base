import { ServerOptions } from 'vite';

export default {
  port: 5000,
  open: true,

  proxy: {
    '/backend': {
      target: 'http://localhost:5001',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/backend/, ''),
    },
  },
} satisfies ServerOptions;
