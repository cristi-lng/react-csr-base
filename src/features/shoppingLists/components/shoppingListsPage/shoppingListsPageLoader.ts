import { queryClient } from 'src/api/queryProvider';
import { getShoppingListsOptions } from '~shoppingLists/api/shoppingListsQueries';

function shoppingListsPageLoader() {
  return queryClient.ensureQueryData(getShoppingListsOptions());
}

export { shoppingListsPageLoader };
