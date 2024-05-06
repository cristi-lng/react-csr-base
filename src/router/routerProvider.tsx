import { RouterProvider as TanstackRouterProvider } from '@tanstack/react-router';

import { router } from 'src/router/routerBuilder';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function RouterProvider() {
  return <TanstackRouterProvider router={router} />;
}

export { RouterProvider, router };
