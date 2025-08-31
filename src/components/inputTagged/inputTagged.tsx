import type { ReactNode } from 'react';
import classNames from 'classnames';

import { InputText, type InputTextProps } from 'src/components/inputText/inputText';
import classes from './inputTagged.module.scss';

type InputTaggedProps = InputTextProps & {
  tag: ReactNode;
};

function InputTagged({ tag, ...rest }: InputTaggedProps) {
  return (
    <div className={classes.inputTagged}>
      <span className={classes.inputTagged_tag}>{tag}</span>
      <InputText {...rest} className={classNames(classes.inputTagged_input, rest.className)} />
    </div>
  );
}

export { InputTagged };
