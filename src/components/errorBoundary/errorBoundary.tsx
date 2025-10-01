import { useStore } from '@nanostores/react';
import classNames from 'classnames';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { DisplayError } from 'src/types/displayError';
import classes from './errorBoundary.module.scss';

function ErrorBoundary({ error }: { error: Error }) {
  const i18nMessages = useStore($i18nMessages);
  const { title, details } = getErrorMessages();

  function getErrorMessages() {
    if (error instanceof DisplayError) {
      return {
        title: i18nMessages[error.title],
        details: error.details ? i18nMessages[error.details] : undefined,
      };
    } else {
      return {
        title: i18nMessages.genericErrorTitle,
        details: i18nMessages.genericErrorDetails,
      };
    }
  }

  return (
    <div className={classes.errorBoundary}>
      <span className={classNames(classes.errorBoundary_icon, 'icon-error')} />
      <div className={classes.errorBoundary_title}>{title}</div>
      {details && <div className={classes.errorBoundary_details}>{details}</div>}
      <div className={classes.errorBoundary_separator}></div>
      <div>{i18nMessages.genericErrorContact}</div>
    </div>
  );
}

export { ErrorBoundary };
