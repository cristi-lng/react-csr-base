import type { ItemFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { useAddItemForm } from '~shoppingLists/components/shoppingListView/itemsCard/addItemForm/useAddItemForm';
import { InputCheckbox } from 'src/components/inputCheckbox/inputCheckbox';
import { InputText } from 'src/components/inputText/inputText';
import { InputTagged } from 'src/components/inputTagged/inputTagged';
import { Button } from 'src/components/button/button';
import classes from './addItemForm.module.scss';

function AddItemForm({ addItem }: { addItem: (item: ItemFormData) => void }) {
  const { i18nMessages, currency, formCtrl, handleAddItem } = useAddItemForm({ addItem });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formCtrl;

  return (
    <div className={classes.addItemForm}>
      <InputCheckbox {...register('purchased')} />
      <div className={classes.addItemForm_textInputs}>
        <InputText placeholder={i18nMessages.name} invalid={!!errors.name} {...register('name', { required: true })} />
        <InputText
          placeholder={i18nMessages.quantity}
          invalid={!!errors.quantity}
          {...register('quantity', { required: true })}
        />
        <InputTagged
          type="number"
          tag={currency}
          placeholder={i18nMessages.price}
          invalid={!!errors.price}
          {...register('price', { required: true, min: 0, valueAsNumber: true })}
        />
      </div>
      <Button variant="primary" type="button" onClick={handleSubmit((item) => handleAddItem(item))}>
        +
      </Button>
    </div>
  );
}

export { AddItemForm };
