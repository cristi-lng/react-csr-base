import { useSuspenseQuery } from '@tanstack/react-query';

import { shoppingListsQueries } from '~shoppingLists/api/shoppingListsQueries';
import { PageHeader } from 'src/components/pageHeader/pageHeader';
import { ShoppingListsView } from '~shoppingLists/components/shoppingLists/shoppingListsView';

function ShoppingListsPage() {
  const getShoppingListsOptions = shoppingListsQueries.getShoppingListsOptions();
  const { data: shoppingLists } = useSuspenseQuery(getShoppingListsOptions);

  return (
    <>
      <PageHeader title="shoppingLists" />
      <ShoppingListsView shoppingLists={shoppingLists} />
    </>
  );
}

export { ShoppingListsPage };
