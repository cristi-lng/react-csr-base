import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './inputCheckbox.module.scss';

type InputCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(({ className, ...rest }, ref) => {
  return <input {...rest} ref={ref} type="checkbox" className={classNames(classes.inputCheckbox, className)} />;
});

export { InputCheckbox };
