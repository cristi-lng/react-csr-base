import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import classes from './button.module.scss';
import { Link, LinkProps } from '@tanstack/react-router';

type ButtonSpecificProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
};
type LinkSpecificProps = LinkProps & {
  as: 'link';
  className?: string;
};
type FinalProps = (ButtonSpecificProps | LinkSpecificProps) & {
  variant: 'primary' | 'neutral';
};

function Button({ variant, className, ...rest }: FinalProps) {
  const finalClasses = classNames(classes.button, classes[variant], className);

  return rest.as == 'link' ? (
    <Link {...rest} className={finalClasses} />
  ) : (
    <button {...rest} className={finalClasses} />
  );
}

export { Button };
