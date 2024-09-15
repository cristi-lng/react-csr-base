import { Outlet, createRootRoute, createRoute } from '@tanstack/react-router';

/**
 * App wide routes
 */
const rootRoute = createRootRoute({
  component: Outlet,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'layout',
  component: Outlet,
});

export { rootRoute, layoutRoute };
