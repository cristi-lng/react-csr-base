import type { Locale } from 'src/types/locale';
import type { I18nMessages } from 'src/i18n/i18nMessages';
import { DEFAULT_LOCALE } from 'src/constants/constants';
import enUsMessages from 'src/assets/i18n/i18n-en_US.json';

/**
 * Build the i18n messages
 * The en_US messages are included in the main bundle, while the others are loaded dynamically at runtime
 */
class I18nMessagesBuilder {
  buildDefault(): I18nMessages {
    return { ...enUsMessages };
  }

  async buildForLocale(locale: Locale): Promise<I18nMessages> {
    return locale == DEFAULT_LOCALE
      ? this.buildDefault()
      : // we included the fallback to the default locale messages
        // to overcome the situation when a particular message is missing from the non-default translation file
        { ...this.buildDefault(), ...(await this.#importForLocale(locale)).default };
  }

  async #importForLocale(locale: Exclude<Locale, typeof DEFAULT_LOCALE>) {
    switch (locale) {
      case 'fr-FR':
        return import('src/assets/i18n/i18n-fr_FR.json');
      // other locales that you support
    }
  }
}

export const i18nMessagesBuilder = new I18nMessagesBuilder();
