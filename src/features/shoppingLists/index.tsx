import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';
import { shoppingListsLoader } from '~shoppingLists/pages/shoppingListsLoader';
import { shoppingListLoader } from '~shoppingLists/pages/shoppingListLoader';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: shoppingListsLoader,
  component: lazyRouteComponent(() => import('~shoppingLists/pages/shoppingListsPage'), 'ShoppingListsPage'),
});

const shoppingListRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/shoppingLists/$id',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: ({ params: { id } }) => shoppingListLoader(id),
  component: lazyRouteComponent(() => import('~shoppingLists/pages/shoppingListPage'), 'ShoppingListPage'),
});

export { shoppingListsRoute, shoppingListRoute };
