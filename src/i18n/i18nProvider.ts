import { type ComponentsJSON, createI18n, localeFrom } from '@nanostores/i18n';

import { $locale } from 'src/stores/sessionStore/sessionStore';
import { DEFAULT_LOCALE } from 'src/constants/constants';

/**
 * This is the place to setup internationalization.
 *
 * - it exports i18nProvider — a function that creates atoms to access messages
 * - default locale messages (english) are defined in i18nMessages.ts to have full TypeScript support
 * - messages for the other locales are dynamically loaded from JSON files
 *
 * Currently, all messages are loaded at once. Splitting by feature could be done in the future
 * if the messages grow large or for organizational purposes, but it’s not strictly necessary.
 *
 * Docs:
 * https://github.com/nanostores/i18n
 */

const i18nMessageImports = import.meta.glob<{ default: ComponentsJSON }>('./i18n-*.json');

const i18nProvider = createI18n(localeFrom($locale), {
  baseLocale: DEFAULT_LOCALE,
  get: async (locale) => {
    const i18nMessageImport = i18nMessageImports[`./i18n-${locale}.json`];
    return i18nMessageImport ? (await i18nMessageImport()).default : {};
  },
});

export { i18nProvider };
