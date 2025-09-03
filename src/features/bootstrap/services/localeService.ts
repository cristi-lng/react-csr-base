import type { Locale } from 'src/types/locale';
import { LOCALE_OPTIONS } from 'src/constants/constants';
import { $locale } from 'src/stores/sessionStore/sessionStore';
import { accountApi } from '~bootstrap/api/accountApi';
import { sessionService } from '~bootstrap/services/sessionService';

class LocaleService {
  findLocaleOption(locale: Locale) {
    return LOCALE_OPTIONS.find((localeOption) => localeOption.name == locale);
  }

  changeLocale(locale: Locale) {
    if (locale != $locale.get()) {
      $locale.set(locale);
      this.#updateAccountLocale(locale);
    }
  }

  async #updateAccountLocale(locale: Locale) {
    const newAccount = await accountApi.patchAccount({ locale });
    sessionService.processAccount(newAccount);
  }
}

export const localeService = new LocaleService();
