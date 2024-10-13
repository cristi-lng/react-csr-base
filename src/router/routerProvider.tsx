import { createRouter, RouterProvider as TanstackRouterProvider } from '@tanstack/react-router';

import { routeTree } from 'src/router/routesConfig';
import { ErrorBoundary } from 'src/components/errorBoundary/errorBoundary';
import { SectionName } from '~bootstrap';

/**
 * This is the place to configure tanstack router.
 * It exports the RouterProvider component to be included in the react tree and the router object to be used outside react
 */

/**
 * You can configure the router defaults here
 * https://tanstack.com/router/latest/docs/framework/react/api/router/RouterOptionsType
 */
const router = createRouter({
  routeTree,
  defaultErrorComponent: ErrorBoundary,
  defaultPreloadStaleTime: 0, // we set this to 0 because we are using an external cache (tanstack query)
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
  interface StaticDataRouteOption {
    underSection?: SectionName;
  }
}

function RouterProvider() {
  return <TanstackRouterProvider router={router} />;
}

export { RouterProvider, router };
