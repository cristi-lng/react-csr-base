import { useSuspenseQuery } from '@tanstack/react-query';

import { shoppingListRoute } from '~shoppingLists';
import { shoppingListsQueries } from '~shoppingLists/api/shoppingListsQueries';
import { PageHeader } from 'src/components/pageHeader/pageHeader';
import { ShoppingListView } from '~shoppingLists/components/shoppingListView/shoppingListView';

function ShoppingListPage() {
  const { id: shoppingListId } = shoppingListRoute.useParams();
  const getShoppingListOptions = shoppingListsQueries.getShoppingListOptions(shoppingListId);
  const { data: shoppingList } = useSuspenseQuery(getShoppingListOptions);

  return (
    <>
      <PageHeader title="listDetails" back={{ to: '/' }} />
      <ShoppingListView shoppingList={shoppingList} />
    </>
  );
}

export { ShoppingListPage };
