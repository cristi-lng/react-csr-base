import { useStore } from '@nanostores/react';

import type { AnyDate } from 'src/types/anyDate';
import { $locale } from 'src/stores/sessionStore/sessionStore';
import { formatDate } from 'src/formatters/date/formatDate';

function FormattedDate({ date }: { date: AnyDate }) {
  const locale = useStore($locale);
  return formatDate({ date, locale });
}

export { FormattedDate };
