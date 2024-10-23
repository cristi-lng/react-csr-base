import { Locale } from 'src/types/locale';

const specialKeys = {
  i18nMessages: (locale: Locale) => ['i18nMessages', locale] as const,
  sessionLoad: ['sessionLoad'] as const,
};

export { specialKeys };
