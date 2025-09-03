import { useStore } from '@nanostores/react';

import { useMatchMediaQuery } from 'src/hooks/useMatchMediaQuery';
import cssExports from 'src/styles/preprocessor/exports.module.scss';
import { $locale } from 'src/stores/sessionStore/sessionStore';
import { localeService } from '~bootstrap/services/localeService';
import { Dropdown } from 'src/components/dropdown/dropdown';
import { LOCALE_OPTIONS } from 'src/constants/constants';
import classes from './localeSelector.module.scss';

function LocaleSelector() {
  const isMediumScreen = !useMatchMediaQuery(cssExports.mediaMdAbove);
  const currentLocale = useStore($locale);
  const currentLocaleOption = localeService.findLocaleOption(currentLocale);

  return (
    <Dropdown
      mode={isMediumScreen ? 'inline' : 'over'}
      position="bottom"
      trigger={({ isOpen }) => (
        <div className={classes.localeSelector_trigger}>
          {currentLocaleOption?.label}
          <span className={isOpen ? 'icon-up' : 'icon-down'} />
        </div>
      )}
      options={() =>
        LOCALE_OPTIONS.map((localeOption) => (
          <div className={classes.localeSelector_option} onClick={() => localeService.changeLocale(localeOption.name)}>
            {localeOption.label}
          </div>
        ))
      }
    />
  );
}

export { LocaleSelector };
