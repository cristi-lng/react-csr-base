import { ReactNode } from 'react';
import { Link, LinkProps } from '@tanstack/react-router';

import classes from './linkButton.module.scss';

type LinkButtonProps = LinkProps & {
  children: ReactNode;
};

function LinkButton({ children, ...rest }: LinkButtonProps) {
  return (
    <Link {...rest} className={classes.linkButton}>
      {children}
    </Link>
  );
}

export { LinkButton };
