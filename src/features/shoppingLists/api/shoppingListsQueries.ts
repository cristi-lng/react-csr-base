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
}

export const shoppingListsQueries = new ShoppingListsQueries();
