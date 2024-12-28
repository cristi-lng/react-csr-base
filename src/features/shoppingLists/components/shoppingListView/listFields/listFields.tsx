import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { InputText } from 'src/components/inputText/inputText';
import classes from './listFields.module.scss';

function ListFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ListFormData>();
  const intl = useIntl();

  return (
    <div className={classes.listFields}>
      <InputText
        placeholder={intl.formatMessage({ id: 'name' })}
        invalid={!!errors.name}
        {...register('name', { required: true })}
      />
      <InputText
        placeholder={intl.formatMessage({ id: 'dueDate' })}
        onFocus={(event) => (event.target.type = 'date')}
        {...register('dueDate', { onBlur: (event) => (event.target.type = 'text') })}
      />
      <InputText placeholder={intl.formatMessage({ id: 'category' })} {...register('category')} />
    </div>
  );
}

export { ListFields };
