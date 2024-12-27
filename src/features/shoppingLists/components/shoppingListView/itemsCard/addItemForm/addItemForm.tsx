import { ItemFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { useAddItemForm } from '~shoppingLists/components/shoppingListView/itemsCard/addItemForm/useAddItemForm';
import { InputCheckbox } from 'src/components/inputCheckbox/inputCheckbox';
import { InputText } from 'src/components/inputText/inputText';
import { InputTagged } from 'src/components/inputTagged/inputTagged';
import { Button } from 'src/components/button/button';
import classes from './addItemForm.module.scss';

function AddItemForm({ addItem }: { addItem: (item: ItemFormData) => void }) {
  const { formCtrl, handleAddItem, currency, intl } = useAddItemForm({ addItem });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formCtrl;

  return (
    <div className={classes.addItemForm}>
      <InputCheckbox {...register('purchased')} />
      <div className={classes.addItemForm_textInputs}>
        <InputText
          placeholder={intl.formatMessage({ id: 'name' })}
          invalid={!!errors.name}
          {...register('name', { required: true })}
        />
        <InputText
          placeholder={intl.formatMessage({ id: 'quantity' })}
          invalid={!!errors.quantity}
          {...register('quantity', { required: true })}
        />
        <InputTagged
          type="number"
          tag={currency}
          placeholder={intl.formatMessage({ id: 'price' })}
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
