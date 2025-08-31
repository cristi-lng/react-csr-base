import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './inputCheckbox.module.scss';

type InputCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

function InputCheckbox({ className, ...rest }: InputCheckboxProps) {
  return <input {...rest} type="checkbox" className={classNames(classes.inputCheckbox, className)} />;
}

export { InputCheckbox };
