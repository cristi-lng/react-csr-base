import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';
import { shoppingListsLoader } from '~shoppingLists/pages/shoppingListsLoader';
import { ShoppingListsPage } from '~shoppingLists/pages/shoppingListsPage';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: shoppingListsLoader,
  component: ShoppingListsPage,
});

export { shoppingListsRoute };
