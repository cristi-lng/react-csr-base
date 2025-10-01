import { useStore } from '@nanostores/react';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import classes from './notFound.module.scss';

function NotFound() {
  const i18nMessages = useStore($i18nMessages);

  return (
    <div className={classes.notFound}>
      <div className={classes.notFound_404}>404</div>
      <div className={classes.notFound_title}>{i18nMessages.notFoundTitle}</div>
      <div className={classes.notFound_details}>{i18nMessages.notFoundDetails}</div>
    </div>
  );
}

export { NotFound };
