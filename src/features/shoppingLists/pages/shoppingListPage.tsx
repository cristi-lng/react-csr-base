import { useSuspenseQuery } from '@tanstack/react-query';

import { shoppingListRoute } from '~shoppingLists';
import { shoppingListsQueries } from '~shoppingLists/api/shoppingListsQueries';
import { PageHeader } from 'src/components/pageHeader/pageHeader';

function ShoppingListPage() {
  const { id: shoppingListId } = shoppingListRoute.useParams();
  const getShoppingListOptions = shoppingListsQueries.getShoppingListOptions(shoppingListId);
  const { data: shoppingList } = useSuspenseQuery(getShoppingListOptions);

  return (
    <>
      <PageHeader title="listDetails" back="/" />
      <div>
        <pre>{JSON.stringify(shoppingList, null, 2)}</pre>
      </div>
    </>
  );
}

export { ShoppingListPage };
