import { createRoute } from '@tanstack/react-router';

import { layoutRoute } from '~bootstrap';

const shoppingListsRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: '/',
  staticData: {
    underSection: 'shoppingLists',
  },
  component: () => {},
});

export { shoppingListsRoute };
