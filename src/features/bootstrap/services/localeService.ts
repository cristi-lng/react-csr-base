import type { Locale } from 'src/types/locale';
import { LOCALE_OPTIONS } from 'src/constants/constants';
import { $locale } from 'src/stores/sessionStore/sessionStore';
import { patchAccount } from '~bootstrap/api/accountApi';
import { processAccount } from '~bootstrap/services/sessionService';

function findLocaleOption(locale: Locale) {
  return LOCALE_OPTIONS.find((localeOption) => localeOption.name == locale);
}

async function changeLocale(locale: Locale) {
  if (locale != $locale.get()) {
    $locale.set(locale);
    const newAccount = await patchAccount({ locale });
    processAccount(newAccount);
  }
}

export { findLocaleOption, changeLocale };
