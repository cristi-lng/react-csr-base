import { FormattedMessage } from 'react-intl';

import classes from './notFound.module.scss';

function NotFound() {
  return (
    <div className={classes.notFound}>
      <div className={classes.notFound_404}>404</div>
      <div className={classes.notFound_title}>
        <FormattedMessage id="notFound.title" />
      </div>
      <div className={classes.notFound_details}>
        <FormattedMessage id="notFound.details" />
      </div>
    </div>
  );
}

export { NotFound };
