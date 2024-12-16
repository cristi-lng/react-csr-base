import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';
import { shoppingListsLoader } from '~shoppingLists/pages/shoppingListsLoader';
import { ShoppingListsPage } from '~shoppingLists/pages/shoppingListsPage';
import { shoppingListLoader } from '~shoppingLists/pages/shoppingListLoader';
import { ShoppingListPage } from '~shoppingLists/pages/shoppingListPage';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: shoppingListsLoader,
  component: ShoppingListsPage,
});

const shoppingListRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/shoppingLists/$id',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: ({ params: { id } }) => shoppingListLoader(id),
  component: ShoppingListPage,
});

export { shoppingListsRoute, shoppingListRoute };
