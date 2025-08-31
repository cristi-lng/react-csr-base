import type { Locale } from 'src/types/locale';

const specialKeys = {
  i18nMessages: (locale: Locale) => ['i18nMessages', locale] as const,
  sessionInfo: ['sessionInfo'] as const,
};

export { specialKeys };
