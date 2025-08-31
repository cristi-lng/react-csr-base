import type { FormatDateArgs } from 'src/formatters/date/formatDateArgs';

class DateFormatter {
  format({ date, locale }: FormatDateArgs) {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(typeof date == 'string' ? new Date(date) : date);
  }
}

export const dateFormatter = new DateFormatter();
