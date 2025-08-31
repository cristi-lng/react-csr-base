import { FormattedMessage } from 'react-intl';
import { Link, type RegisteredRouter, type ValidateLinkOptions } from '@tanstack/react-router';

import classes from './pageHeader.module.scss';

type PageHeaderProps<TRouter extends RegisteredRouter = RegisteredRouter, TOptions = unknown> = {
  title: string;
  back?: ValidateLinkOptions<TRouter, TOptions>;
};

function PageHeader({ title, back }: PageHeaderProps) {
  return (
    <div className={classes.pageHeader}>
      {back && (
        <Link {...back}>
          <span className="icon-left"></span>
        </Link>
      )}
      <h1>
        <FormattedMessage id={title} defaultMessage={title} />
      </h1>
    </div>
  );
}

export { PageHeader as PageHeader };
