import { createRoute, lazyRouteComponent } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';
import { shoppingListsPageLoader } from '~shoppingLists/components/shoppingListsPage/shoppingListsPageLoader';
import { shoppingListPageLoader } from '~shoppingLists/components/shoppingListPage/shoppingListPageLoader';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: shoppingListsPageLoader,
  component: lazyRouteComponent(
    () => import('~shoppingLists/components/shoppingListsPage/shoppingListsPage'),
    'ShoppingListsPage',
  ),
});

const shoppingListRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/shoppingLists/$id',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: ({ params: { id } }) => shoppingListPageLoader(id),
  component: lazyRouteComponent(
    () => import('~shoppingLists/components/shoppingListPage/shoppingListPage'),
    'ShoppingListPage',
  ),
});

export { shoppingListsRoute, shoppingListRoute };
