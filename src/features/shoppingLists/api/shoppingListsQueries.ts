import { queryOptions } from '@tanstack/react-query';

import { shoppingListsKeys } from 'src/stores/queryKeys/shoppingListsKeys';
import { shoppingListsApi } from '~shoppingLists/api/shoppingListsApi';

class ShoppingListsQueries {
  getShoppingListsOptions() {
    return queryOptions({
      queryKey: shoppingListsKeys.listsOverview(),
      queryFn: () => shoppingListsApi.getShoppingLists(),
    });
  }

  getShoppingListOptions(id: string) {
    return queryOptions({
      queryKey: shoppingListsKeys.listDetails(id),
      queryFn: () => (id == 'new' ? null : shoppingListsApi.getShoppingList(id)),
    });
  }
}

export const shoppingListsQueries = new ShoppingListsQueries();
