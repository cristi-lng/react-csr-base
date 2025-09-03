import { useStore } from '@nanostores/react';

import type { FormatDateArgs } from 'src/formatters/date/formatDateArgs';
import { $locale } from 'src/stores/sessionStore/sessionStore';
import { dateFormatter } from 'src/formatters/date/dateFormatter';

function FormatDate({ date }: Pick<FormatDateArgs, 'date'>) {
  const locale = useStore($locale);
  return dateFormatter.format({ date, locale });
}

export { FormatDate };
