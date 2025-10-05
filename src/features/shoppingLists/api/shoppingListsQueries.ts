import { queryOptions } from '@tanstack/react-query';

import { shoppingListsKeys } from 'src/stores/queryKeys/shoppingListsKeys';
import { getShoppingLists, getShoppingList } from '~shoppingLists/api/shoppingListsApi';

function getShoppingListsOptions() {
  return queryOptions({
    queryKey: shoppingListsKeys.listsOverview(),
    queryFn: () => getShoppingLists(),
  });
}

function getShoppingListOptions(id: string) {
  return queryOptions({
    queryKey: shoppingListsKeys.listDetails(id),
    queryFn: () => (id == 'new' ? null : getShoppingList(id)),
  });
}

export { getShoppingListsOptions, getShoppingListOptions };
