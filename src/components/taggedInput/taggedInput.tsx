import { InputHTMLAttributes, ReactNode } from 'react';

import classes from './taggedInput.module.scss';

type TaggedInputProps = InputHTMLAttributes<HTMLInputElement> & {
  tag: ReactNode;
};

function TaggedInput({ tag, ...rest }: TaggedInputProps) {
  return (
    <div className={classes.taggedInput}>
      <span className={classes.taggedInput_tag}>{tag}</span>
      <input {...rest} className={classes.taggedInput_input} />
    </div>
  );
}

export { TaggedInput };
