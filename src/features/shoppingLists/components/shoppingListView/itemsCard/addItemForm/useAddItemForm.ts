import { useForm } from 'react-hook-form';
import { useStore } from '@nanostores/react';
import { useIntl } from 'react-intl';

import type { ItemFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { $currency } from 'src/stores/sessionStore/sessionStore';

function useAddItemForm({ addItem }: { addItem: (item: ItemFormData) => void }) {
  const formCtrl = useForm<ItemFormData>({ mode: 'onChange', defaultValues: getInitFormData() });
  const currency = useStore($currency);
  const intl = useIntl();

  function getInitFormData(): ItemFormData {
    return { name: null, quantity: null, price: null, purchased: false };
  }

  function handleAddItem(item: ItemFormData) {
    addItem(item);
    formCtrl.reset(getInitFormData());
  }

  return { formCtrl, handleAddItem, currency, intl };
}

export { useAddItemForm };
