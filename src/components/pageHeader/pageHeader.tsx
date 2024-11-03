import { FormattedMessage } from 'react-intl';
import { Link, RegisteredRouter, RoutePaths } from '@tanstack/react-router';

import classes from './pageHeader.module.scss';

type PageHeaderProps = {
  title: string;
  back?: RoutePaths<RegisteredRouter['routeTree']>;
};

function PageHeader({ title, back }: PageHeaderProps) {
  return (
    <div className={classes.pageHeader}>
      {back && (
        <Link to={back}>
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
