import { shoppingListsQueries } from '~shoppingLists/api/shoppingListsQueries';
import { queryClient } from 'src/api/queryProvider';

function shoppingListsLoader() {
  const getShoppingListsOptions = shoppingListsQueries.getShoppingListsOptions();
  return queryClient.ensureQueryData(getShoppingListsOptions);
}

export { shoppingListsLoader };
