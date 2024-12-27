import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { listFormService } from '~shoppingLists/components/shoppingListView/listFormService';

function useShoppingListView({ shoppingList }: { shoppingList: ShoppingListDetails | null }) {
  const initFormData = useMemo(() => listFormService.computeInitData(shoppingList), [shoppingList]);
  const formCtrl = useForm<ListFormData>({ mode: 'onChange', values: initFormData });

  return { formCtrl };
}

export { useShoppingListView };
