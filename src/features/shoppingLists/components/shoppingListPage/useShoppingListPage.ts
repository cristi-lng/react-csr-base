import { useMemo } from 'react';
import { useStore } from '@nanostores/react';
import { useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { Route } from 'src/router/routes/shoppingLists/$id';
import { getShoppingListOptions } from '~shoppingLists/api/shoppingListsQueries';
import type { ListFormData } from '~shoppingLists/components/shoppingListPage/listFormTypes';
import type { ShoppingListDetails } from '~shoppingLists/types/shoppingListDetails';
import { createShoppingList, updateShoppingList } from '~shoppingLists/api/shoppingListsApi';
import { queryClient } from 'src/api/queryProvider';
import { shoppingListsKeys } from 'src/stores/queryKeys/shoppingListsKeys';

function useShoppingListPage() {
  const i18nMessages = useStore($i18nMessages);
  const navigate = useNavigate();

  const { id: shoppingListId } = Route.useParams();
  const { data: shoppingList } = useSuspenseQuery(getShoppingListOptions(shoppingListId));

  const initFormData = useMemo(() => buildInitFormData(shoppingList), [shoppingList]);
  const formCtrl = useForm<ListFormData>({ mode: 'onChange', values: initFormData });

  function buildInitFormData(shoppingList: ShoppingListDetails | null): ListFormData {
    if (shoppingList) {
      const { name, dueDate, category, items } = shoppingList;
      return { name, dueDate, category, items };
    } else {
      return { name: null, dueDate: null, category: null, items: [] };
    }
  }

  const { mutate: handleSaveList } = useMutation({
    mutationFn: (formData: ListFormData) => {
      // we are sure at this point that the two data types are compatible
      const payload = formData as Omit<ShoppingListDetails, 'id'>;
      return !shoppingList ? createShoppingList(payload) : updateShoppingList(shoppingList.id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: shoppingListsKeys.all });
      navigate({ to: '/' });
    },
  });

  return { i18nMessages, formCtrl, handleSaveList };
}

export { useShoppingListPage };
