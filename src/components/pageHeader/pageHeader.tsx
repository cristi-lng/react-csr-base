import { useStore } from '@nanostores/react';
import { Link, type RegisteredRouter, type ValidateLinkOptions } from '@tanstack/react-router';

import { type I18nMessageKey, $i18nMessages } from 'src/i18n/i18nMessages';
import classes from './pageHeader.module.scss';

type PageHeaderProps<TRouter extends RegisteredRouter = RegisteredRouter, TOptions = unknown> = {
  title: I18nMessageKey;
  back?: ValidateLinkOptions<TRouter, TOptions>;
};

function PageHeader({ title, back }: PageHeaderProps) {
  const i18nMessages = useStore($i18nMessages);

  return (
    <div className={classes.pageHeader}>
      {back && (
        <Link {...back}>
          <span className="icon-left"></span>
        </Link>
      )}
      <h1>{i18nMessages[title]}</h1>
    </div>
  );
}

export { PageHeader as PageHeader };
