import { useIntl } from 'react-intl';

import { TaggedInput } from 'src/components/taggedInput/taggedInput';
import { LocaleSelector } from '~bootstrap/components/layout/toolbar/localeSelector';
import { ProfileDropdown } from '~bootstrap/components/layout/toolbar/profileDropdown';
import classes from './toolbar.module.scss';

function Toolbar() {
  const intl = useIntl();

  return (
    <div className={classes.toolbar}>
      <div className={classes.toolbar_searchContainer}>
        <TaggedInput
          tag={<span className="icon-search" />}
          placeholder={intl.formatMessage({ id: 'searchForAnything' })}
        />
      </div>
      <LocaleSelector />
      <ProfileDropdown />
    </div>
  );
}

export { Toolbar };
