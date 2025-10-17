import { createFileRoute } from '@tanstack/react-router';

import { shoppingListsPageLoader, ShoppingListsPage } from '~shoppingLists';

const Route = createFileRoute('/')({
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: shoppingListsPageLoader,
  component: ShoppingListsPage,
});

export { Route };
