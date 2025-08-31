import type { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './inputText.module.scss';

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'number' | 'date';
  invalid?: boolean;
};

function InputText({ invalid, ...rest }: InputTextProps) {
  return <input {...rest} className={classNames(classes.inputText, { [classes.invalid]: invalid }, rest.className)} />;
}

export { InputText, type InputTextProps };
