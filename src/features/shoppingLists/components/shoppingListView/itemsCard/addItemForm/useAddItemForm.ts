import { useStore } from '@nanostores/react';
import { useForm } from 'react-hook-form';

import type { ItemFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { $i18nMessages } from 'src/i18n/i18nMessages';
import { $currency } from 'src/stores/sessionStore/sessionStore';

function useAddItemForm({ addItem }: { addItem: (item: ItemFormData) => void }) {
  const i18nMessages = useStore($i18nMessages);
  const currency = useStore($currency);
  const formCtrl = useForm<ItemFormData>({ mode: 'onChange', defaultValues: getInitFormData() });

  function getInitFormData(): ItemFormData {
    return { name: null, quantity: null, price: null, purchased: false };
  }

  function handleAddItem(item: ItemFormData) {
    addItem(item);
    formCtrl.reset(getInitFormData());
  }

  return { i18nMessages, currency, formCtrl, handleAddItem };
}

export { useAddItemForm };
