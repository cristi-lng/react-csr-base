import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './inputText.module.scss';

type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: 'text' | 'number' | 'date';
  invalid?: boolean;
};

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ invalid, ...rest }, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
      className={classNames(classes.inputText, { [classes.invalid]: invalid }, rest.className)}
    />
  );
});

export { InputText, type InputTextProps };
