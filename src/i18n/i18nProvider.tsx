import { PropsWithChildren } from 'react';
import { IntlShape, RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { I18nMessages } from 'src/i18n/i18nMessages';
import { DEFAULT_LOCALE } from 'src/constants/constants';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';
import { specialKeys } from 'src/stores/queryKeys/specialKeys';
import { i18nMessagesBuilder } from 'src/i18n/i18nMessagesBuilder';

/**
 * This is the place to manage internationalization.
 * It exports the I18nProvider component to be included in the react tree and the intl object to be used outside react
 */

const cache = createIntlCache();
let intl: IntlShape;

function I18nProvider({ children }: PropsWithChildren) {
  /**
   * When the locale is changed to non-default, the messages are loaded in the background and the app is not blocked
   * until they arrive. This means that on slow networks it might take some time until the page is translated.
   * But this is desired behavior.
   */
  const locale = useSessionStore((state) => state.locale);
  const { isSuccess, data: messages } = useQuery(messagesQueryOptions());
  isSuccess && (intl = createIntl({ locale, defaultLocale: locale, messages }, cache));

  function messagesQueryOptions() {
    return {
      queryKey: specialKeys.i18nMessages(locale),
      queryFn: () => i18nMessagesBuilder.buildForLocale(locale),
      initialData: locale == DEFAULT_LOCALE ? i18nMessagesBuilder.buildDefault() : undefined,
      staleTime: Infinity,
    } satisfies UseQueryOptions<I18nMessages>;
  }

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}

export { I18nProvider, intl };
