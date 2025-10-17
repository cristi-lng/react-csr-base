import { createFileRoute } from '@tanstack/react-router';

import { shoppingListPageLoader, ShoppingListPage } from '~shoppingLists';

const Route = createFileRoute('/shoppingLists/$id')({
  staticData: {
    underSection: 'shoppingLists',
  },
  loader: ({ params: { id } }) => shoppingListPageLoader(id),
  component: ShoppingListPage,
});

export { Route };
