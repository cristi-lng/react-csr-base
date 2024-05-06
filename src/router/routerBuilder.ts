import { createRouter } from '@tanstack/react-router';

import { routeTree } from 'src/router/routesConfig';
//import { DefaultErrorBoundary } from 'src/components/errorBoundary/defaultErrorBoundary';

/**
 * Here you can configure the Tanstack router defaults
 * https://tanstack.com/router/latest/docs/framework/react/api/router/RouterOptionsType
 *
 * Current config:
 * - we are using an external cache (tanstack query) -> defaultPreloadStaleTime: 0
 */

const router = createRouter({
  routeTree,
  //defaultErrorComponent: DefaultErrorBoundary,
  defaultPreloadStaleTime: 0,
});

export { router };
