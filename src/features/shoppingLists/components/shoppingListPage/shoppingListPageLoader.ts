import { queryClient } from 'src/api/queryProvider';
import { getShoppingListOptions } from '~shoppingLists/api/shoppingListsQueries';

function shoppingListPageLoader(id: string) {
  return queryClient.ensureQueryData(getShoppingListOptions(id));
}

export { shoppingListPageLoader };
