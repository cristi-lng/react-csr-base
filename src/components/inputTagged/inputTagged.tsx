import { forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

import { InputText, InputTextProps } from 'src/components/inputText/inputText';
import classes from './inputTagged.module.scss';

type InputTaggedProps = InputTextProps & {
  tag: ReactNode;
};

const InputTagged = forwardRef<HTMLInputElement, InputTaggedProps>(({ tag, ...rest }, ref) => {
  return (
    <div className={classes.inputTagged}>
      <span className={classes.inputTagged_tag}>{tag}</span>
      <InputText {...rest} ref={ref} className={classNames(classes.inputTagged_input, rest.className)} />
    </div>
  );
});

export { InputTagged };
