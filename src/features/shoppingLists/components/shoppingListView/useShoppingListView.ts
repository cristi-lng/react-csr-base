import { useMemo } from 'react';
import { useStore } from '@nanostores/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';

import type { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { $i18nMessages } from 'src/i18n/i18nMessages';
import type { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { listFormService } from '~shoppingLists/components/shoppingListView/listFormService';
import { shoppingListsApi } from '~shoppingLists/api/shoppingListsApi';
import { queryClient } from 'src/api/queryProvider';
import { shoppingListsKeys } from 'src/stores/queryKeys/shoppingListsKeys';

function useShoppingListView({ shoppingList }: { shoppingList: ShoppingListDetails | null }) {
  const i18nMessages = useStore($i18nMessages);
  const initFormData = useMemo(() => listFormService.computeInitData(shoppingList), [shoppingList]);
  const formCtrl = useForm<ListFormData>({ mode: 'onChange', values: initFormData });

  const navigate = useNavigate();
  const { mutate: handleSaveList } = useMutation({
    mutationFn: (formData: ListFormData) => {
      // we are sure at this point that the two data types are compatible
      const payload = formData as Omit<ShoppingListDetails, 'id'>;
      return !shoppingList
        ? shoppingListsApi.createShoppingList(payload)
        : shoppingListsApi.updateShoppingList(shoppingList.id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: shoppingListsKeys.all });
      navigate({ to: '/' });
    },
  });

  return { i18nMessages, formCtrl, handleSaveList };
}

export { useShoppingListView };
