import { useStore } from '@nanostores/react';
import { useFormContext } from 'react-hook-form';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import type { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { InputText } from 'src/components/inputText/inputText';
import classes from './listFields.module.scss';

function ListFields() {
  const i18nMessages = useStore($i18nMessages);
  const {
    register,
    formState: { errors },
  } = useFormContext<ListFormData>();

  return (
    <div className={classes.listFields}>
      <InputText placeholder={i18nMessages.name} invalid={!!errors.name} {...register('name', { required: true })} />
      <InputText
        placeholder={i18nMessages.dueDate}
        onFocus={(event) => (event.target.type = 'date')}
        {...register('dueDate', { onBlur: (event) => (event.target.type = 'text') })}
      />
      <InputText placeholder={i18nMessages.category} {...register('category')} />
    </div>
  );
}

export { ListFields };
