import { PropsWithChildren } from 'react';
import { IntlShape, RawIntlProvider, createIntl, createIntlCache } from 'react-intl';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { I18nMessages } from 'src/i18n/i18nMessages';
import { DEFAULT_LOCALE } from 'src/constants/constants';
import { useSessionStore } from 'src/stores/sessionStore/sessionStore';
import { i18nMessagesBuilder } from 'src/i18n/i18nMessagesBuilder';

const cache = createIntlCache();
let intl: IntlShape;

function I18nProvider({ children }: PropsWithChildren) {
  const locale = useSessionStore((state) => state.locale);
  const intlLocale = locale.replace('_', '-');
  const { isSuccess, data: messages } = useQuery(messagesQueryOptions());
  isSuccess && (intl = createIntl({ locale: intlLocale, defaultLocale: intlLocale, messages }, cache));

  function messagesQueryOptions() {
    return {
      queryKey: ['i18nMessages', locale],
      queryFn: () => i18nMessagesBuilder.buildForLocale(locale),
      initialData: locale == DEFAULT_LOCALE ? i18nMessagesBuilder.buildDefault() : undefined,
      staleTime: Infinity,
    } satisfies UseQueryOptions<I18nMessages>;
  }

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}

export { I18nProvider, intl };
