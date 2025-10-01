import { useStore } from '@nanostores/react';

import { $i18nMessages } from 'src/i18n/i18nMessages';
import { InputTagged } from 'src/components/inputTagged/inputTagged';
import { LocaleSelector } from '~bootstrap/components/privateLayout/toolbar/localeSelector';
import { ProfileDropdown } from '~bootstrap/components/privateLayout/toolbar/profileDropdown';
import classes from './toolbar.module.scss';

function Toolbar() {
  const i18nMessages = useStore($i18nMessages);

  return (
    <div className={classes.toolbar}>
      <div className={classes.toolbar_searchContainer}>
        <InputTagged tag={<span className="icon-search" />} placeholder={i18nMessages.searchForAnything} />
      </div>
      <LocaleSelector />
      <ProfileDropdown />
    </div>
  );
}

export { Toolbar };
