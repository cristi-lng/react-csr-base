import type { AnyDate } from 'src/types/anyDate';
import type { Locale } from 'src/types/locale';

type FormatDateArgs = {
  date: AnyDate;
  locale: Locale;
};

function formatDate({ date, locale }: FormatDateArgs) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(typeof date == 'string' ? new Date(date) : date);
}

export { formatDate };
