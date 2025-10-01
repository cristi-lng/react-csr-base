import { useStore } from '@nanostores/react';
import classNames from 'classnames';

import { useMatchMediaQuery } from 'src/hooks/useMatchMediaQuery';
import cssExports from 'src/styles/preprocessor/exports.module.scss';
import { $i18nMessages } from 'src/i18n/i18nMessages';
import { $account } from 'src/stores/sessionStore/sessionStore';
import { Dropdown } from 'src/components/dropdown/dropdown';
import avatarPlaceholder from 'src/assets/images/avatar-placeholder.svg';
import classes from './profileDropdown.module.scss';

function ProfileDropdown() {
  const isMediumScreen = !useMatchMediaQuery(cssExports.mediaMdAbove);
  const i18nMessages = useStore($i18nMessages);
  const account = useStore($account);

  return (
    <Dropdown
      mode={isMediumScreen ? 'inline' : 'over'}
      position="bottom"
      trigger={({ isOpen }) => (
        <div className={classes.profileDropdown_trigger}>
          <img className={classes.profileDropdown_avatar} src={account?.avatar || avatarPlaceholder} />
          <div className={classes.profileDropdown_accountInfo}>
            <div>{account?.name}</div>
            <div className={classes.profileDropdown_accountRole}>
              {account?.role === 'ADMIN' ? i18nMessages.admin : i18nMessages.regular}
            </div>
          </div>
          <span className={classNames(classes.profileDropdown_triggerIcon, isOpen ? 'icon-up' : 'icon-down')} />
        </div>
      )}
      options={() => [<div className={classes.profileDropdown_option}>{i18nMessages.logout}</div>]}
    />
  );
}

export { ProfileDropdown };
