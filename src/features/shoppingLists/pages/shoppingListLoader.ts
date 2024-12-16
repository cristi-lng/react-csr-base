import { shoppingListsQueries } from '~shoppingLists/api/shoppingListsQueries';
import { queryClient } from 'src/api/queryProvider';

function shoppingListLoader(id: string) {
  const getShoppingListOptions = shoppingListsQueries.getShoppingListOptions(id);
  return queryClient.ensureQueryData(getShoppingListOptions);
}

export { shoppingListLoader };
