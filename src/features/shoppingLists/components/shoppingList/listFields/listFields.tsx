import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { InputText } from 'src/components/inputText/inputText';
import classes from './listFields.module.scss';

function ListFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const intl = useIntl();

  return (
    <div className={classes.listFields}>
      <InputText
        placeholder={intl.formatMessage({ id: 'name' })}
        invalid={!!errors.name}
        {...register('name', { required: true })}
      />
      <InputText
        type="date"
        placeholder={intl.formatMessage({ id: 'dueDate' })}
        invalid={!!errors.dueDate}
        {...register('dueDate')}
      />
      <InputText
        placeholder={intl.formatMessage({ id: 'category' })}
        invalid={!!errors.category}
        {...register('category')}
      />
    </div>
  );
}

export { ListFields };
