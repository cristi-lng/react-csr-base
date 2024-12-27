import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ItemFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';

function useAddItemForm({ addItem }: { addItem: (item: ItemFormData) => void }) {
  const formCtrl = useForm<ItemFormData>({ mode: 'onChange', defaultValues: getInitFormData() });
  const currency = useSessionStore((state) => state.currency);
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
