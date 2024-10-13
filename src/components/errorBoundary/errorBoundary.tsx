import { ReactNode } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ErrorComponentProps } from '@tanstack/react-router';

import { DisplayError } from 'src/types/displayError';
import { SUPPORT_EMAIL } from 'src/constants/constants';
import classes from './errorBoundary.module.scss';

function ErrorBoundary({ error }: ErrorComponentProps) {
  const title = error instanceof DisplayError ? error.title : 'genericError.title';
  const details = error instanceof DisplayError ? error.details : 'genericError.details';

  function renderContactLink(children: ReactNode[]) {
    return <a href={`mailto:${SUPPORT_EMAIL}`}>{children}</a>;
  }

  return (
    <div className={classes.errorBoundary}>
      <span className={classNames(classes.errorBoundary_icon, 'icon-error')} />
      <div className={classes.errorBoundary_title}>
        <FormattedMessage id={title} defaultMessage={title} />
      </div>
      {details && (
        <div className={classes.errorBoundary_details}>
          <FormattedMessage id={details} defaultMessage={details} />
        </div>
      )}
      <div className={classes.errorBoundary_separator}></div>
      <div>
        <FormattedMessage id="genericError.contact" values={{ a: renderContactLink }} />
      </div>
    </div>
  );
}

export { ErrorBoundary };
